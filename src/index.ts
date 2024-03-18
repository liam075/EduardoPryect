
const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
// console.log("Llegue Aqui");
fs.readFile("src/json/Data.json", "utf8", (err:any, data:any) => {
  if (err) {
    console.error(err);
    return;
  }
  const chistes = JSON.parse(data);
  console.log(chistes);
});



app.get("/", (req:any, res:any) => {
    console.log("Prueba");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("Servidor web iniciado en el puerto 3000");
});