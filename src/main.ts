import * as puppeteer from "puppeteer";
import "dotenv/config";

import Paginas from "./paginas";
import db from "./db";

interface ArgsGetUrl {
	id: string;
	inEspecie: string;
	nrProjeto: string;
	aaProjeto: string;
}

const getUrl = ({ id, inEspecie, nrProjeto, aaProjeto }: ArgsGetUrl): string =>
	`/LegisladorWEB.ASP?WCI=ProjetoTexto&ID=${id}&inEspecie=${inEspecie}&nrProjeto=${nrProjeto}&aaProjeto=${aaProjeto}&dsVerbete=Transporte`;

const BASE_URL = "http://www.legislador.com.br";

(async (): Promise<void> => {
	try {
		await db();

		await Paginas.init();

		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();

		await page.goto(
			BASE_URL + "/LegisladorWEB.ASP?WCI=ProjetoTramite&ID=20"
		);
		await page.type('[name="dsTexto"]', "transporte");
		await page.keyboard.press("Enter");
		await page.waitForNavigation();

		const links = await page.evaluate(() => {
			const links = document.querySelectorAll(
				".card a.btn-outline-secondary"
			);

			return [...links]
				.map((item) => item.getAttribute("onclick"))
				.filter((item) => item)
				.map((item) =>
					item
						.replace("WinProjetoTXT", "")
						.replace(";return false;", "")
						.replace("(", "")
						.replace(")", "")
						.split(",")
				);
		});

		for await (const link of links) {
			const [id, inEspecie, nrProjeto, aaProjeto] = link;

			const url = getUrl({ id, inEspecie, nrProjeto, aaProjeto });

			try {
				const page = await browser.newPage();

				await page.goto(BASE_URL + url);

				const titulo = await page.evaluate(
					() => document.querySelector(".card-title").textContent
				);

				const data = await page.evaluate(() =>
					document
						.querySelector("h6.card-subtitle")
						.textContent.replace("de ", "")
				);

				const situacao = await page.evaluate(
					() => document.querySelectorAll(".col-sm-9")[0].textContent
				);

				const remige = await page.evaluate(
					() => document.querySelectorAll(".col-sm-9")[2].textContent
				);

				const assunto = await page.evaluate(
					() => document.querySelectorAll(".col-sm-9")[3].textContent
				);

				const autor = await page.evaluate(
					() =>
						document.querySelectorAll(".col-sm-9")[4].textContent
				);


				const tramite = await page.evaluate(
					() => {
						const projetos  = [...document.querySelectorAll('[info-col="Projeto"] dt')].map(item => item.textContent)
						const entradas = [...document.querySelectorAll('[info-col="Entrada"]')].map(item => item.textContent)
						const prazos = [...document.querySelectorAll('[info-col="Prazo"]')].map(item => item.textContent)
						const devolucoes = [...document.querySelectorAll('[info-col="Devolução"]')].map(item => item.textContent)

						return projetos.reduce((acc,_,index) => {
							acc.push({
								projeto:projetos[index].trim(),
								entrada:entradas[index].trim(),
								prazo:prazos[index].trim(),
								devolucao:devolucoes[index].trim()
							})
						
							return acc;
						},[])
					}
						
				);


				const ementa = await page.evaluate(
					() => document.querySelectorAll(".card-text")[5].textContent
				);

			

				await Paginas.create({
					titulo,
					assunto,
					autor,
					data,
					situacao,
					remige,
					ementa,
					tramite,
				});
			} catch (error) {
				console.log("error", error.message);
			}
		}

		await browser.close();
	} catch (error) {
		console.log("error", error);
	}
})();
