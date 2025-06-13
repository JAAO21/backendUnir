const express = require("express");
const app = express();
const connectDB = require("./db/db");

connectDB();

app.get("/", (req, res) => {
  res.send("¡¡API conectada a MongoDB y funcionando en Docker!!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
