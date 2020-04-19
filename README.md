[![TypeScript version][ts-badge]][typescript-38]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][LICENSE]
[![Build Status - Travis][travis-badge]][travis-ci]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]
[![Sponsor][sponsor-badge]][sponsor]

# Objetivo do Desafio 

O foco desse desafio foi extrair dados de um site, extraindo assim várias informações das páginas desse site com o Typescript e o NodeJS usando o Puppeteer para a raspagem. As informações extraídas foram enviadas para o MongoDB, eu as extraí com a palavra "transporte".


Para cada resultado da pesquisa, é necessário extrair as seguintes informações de cada página:
- Título principal (ex: Projeto de lei ordinário (L) 103/2019)
- Encontro
- Situação
- Assunto
- Autor
- Cardápio
- Processo do Projeto (Projeto, Entrada, Prazo, Devolução)

## Executando

- Você pode executar o arquivo em seu terminal depois de efetuar todas as instalaçôes necessárias digitando :
npm run build
node build/src/main.js

- Após executar o comando ele irá abrir uma aba rapidamente mostrando informaçes e executando a extração e enviando ao MongoDB (que é o banco de dados que foi utilizado)

# node-typescript-boilerplate

👩🏻‍💻 Pronto para desenvolvedor: um modelo abrangente. Funciona imediatamente para a maioria dos projetos [Node.js] [nodejs].

🏃🏽 Valor instantâneo: todas as ferramentas básicas incluídas e configuradas:

+ [TypeScript][typescript] [3.8][typescript-38]
+ [ESLint][eslint] com algumas recomendações de regras iniciais
+ [Jest][jest] para testes rápidos de unidade e cobertura de código
+ Definições de tipo para Node.js e Jest
+ [Prettier][prettier] para impor estilo de código consistente
+ NPM [scripts](#available-scripts) para operações comuns
+ Exemplo simples de código TypeScript e teste de unidade
+ .Editorconfig para um formato de arquivo consistente
+ Exemplo de configuração para [GitHub Actions][gh-actions] e [Travis CI][travis]

🤲 Livre como no discurso: disponível sob a licença APLv2.

## Começando

Este projeto deve ser usado com a versão mais recente do Active LTS do [Node.js][nodejs]

### Use como um modelo de repositório

Para começar, basta clicar no **[Use template][repo-template-action]** link (ou no botão verde). Agora comece a adicionar seu código no diretório `src` e testes de unidade no `__tests__` diretórios.

# Clonar repositorio

Para clonar o repositório, use os seguintes comandos:

git clone https://github.com/jsynowiec/node-typescript-boilerplate
cd node-typescript-boilerplate
npm install

### Baixe a última versão

Baixe e descompacte o arquivo atual `master` ramo ou uma das tags:


wget https://github.com/jsynowiec/node-typescript-boilerplate/archive/master.zip -O node-typescript-boilerplate.zip
unzip node-typescript-boilerplate.zip && rm node-typescript-boilerplate.zip

## Scripts disponíveis

+ ``clean`` - remova dados de cobertura, cache Jest e arquivos transpilados,
+ ``build`` - transpile TypeScript para ES6,
+ ``build:watch`` - modo de exibição interativo para transpilar arquivos de origem automaticamente,
+ ``lint`` - arquivos e testes de origem do lint,
+ ``test`` - executar testes,
+ ``test:watch`` - modo de exibição interativo para executar novamente automaticamente os testes

## Informações adicionais

### Escrevendo testes em JavaScript

Às vezes, escrever testes de unidade no TypeScript pode ser problemático e confuso. Especialmente quando zombando de dependências e usando espiões.

Isso é ** opcional ** mas se você quiser aprender a escrever testes JavaScript para módulos TypeScript, leia o [corresponding wiki page][wiki-js-tests].

## Apoiantes e patrocinadores

Apoie este projeto tornando-se um patrocinador..

## Licença
Licenciado sob o APLv2. Veja o [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE) arquivo para obter detalhes.

[ts-badge]: https://img.shields.io/badge/TypeScript-3.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[travis-badge]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate.svg?branch=master
[travis-ci]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate
[gha-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fjsynowiec%2Fnode-typescript-boilerplate%2Fbadge&style=flat
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions
[typescript]: https://www.typescriptlang.org/
[typescript-38]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE

[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/jsynowiec

[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[gh-actions]: https://github.com/features/actions
[travis]: https://travis-ci.org

[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
