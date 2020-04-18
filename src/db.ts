import * as mongoose from "mongoose";

const db = ():Promise<mongoose> => {
  return mongoose
    .connect(
      `${process.env.DB_URL}`,
      { useNewUrlParser: true, useUnifiedTopology: true,autoIndex: false,dbName:process.env.DB_NAME }
    )
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch(error => {
      //   If there was an error connecting to the database
      if (error) console.log("Error connecting to MongoDB database", error);
    });
};

export default db;
