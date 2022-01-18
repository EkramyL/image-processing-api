import express from "express";

const main = express.Router();

main.get("/", (req, res) => {
  const myname: string = "Ekramy";
  res.send(`<h1> Hello world ${myname}</h1>`);
});

export default main;
