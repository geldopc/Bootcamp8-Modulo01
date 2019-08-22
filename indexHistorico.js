// const express = require("express");

// console.log(express);
//1. Query Params = ?teste=1
//2. Route Params = /users/1
//3. Request Body = { nome: "Geldo", time: "Botafogo"}
// const server = express();
//__________________________________
//Exemplo return message
//localhost:3000/teste
// server.get("/teste", () => {
//   return res.send("hello geldopc");
// });
//__________________________________
//localhost:3000/teste
//Exemplo return json message
// server.get("/teste", () => {
//   return res.json("hello geldopc");
// });
//__________________________________
//Exemplo Query Params
//localhost:3000/teste?nome=geldopc
// server.get("/teste", (req, res) => {
//   const nome = req.query.nome;
//   return res.json({ message: `hello  ${nome}` });
// });
//__________________________________
//Exemplo Route Params
//localhost:3000/teste/1
// server.get("/teste/:id", (req, res) => {
//   const id = req.params.id;
//Desestruturação
// const { id } = req.params;
//   return res.json({ message: `hello  ${id}` });
// });
//__________________________________
// Exemplo Route Params
// localhost:3000/teste/1
// const users = ["Garrincha", "Gamarra", "Messi"];
// server.get("/teste/:index", (req, res) => {
//   const { index } = req.params;
//   return res.json(users[index]);
// });
// server.listen(3000);
