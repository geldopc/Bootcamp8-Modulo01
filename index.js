const express = require("express");

const server = express();
server.use(express.json());

const users = ["Garrincha", "Pelé", "Messi"];

//middleware global
server.use((req, res, next) => {
  console.time("Request");
  console.log(`method: ${req.method} url: ${req.url}`);
  next();
  console.log("finnaly");
  console.timeEnd("Request");
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "name is required!" });
  }
  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "User does not exists!" });
  }
  req.user = user;
  return next();
}

server.get("/users", (req, res) => {
  return res.send(users);
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  return res.send(req.user);
});

server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.send(users);
});

server.put("/users/:index", checkUserExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.send(users);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.json({ message: "Deletado com Sucesso!" });
});

server.listen(3000);
