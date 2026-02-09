const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contacto", (req, res) => {
  res.render("contacto", {
    title: "Contacto | Dominguez Solutions",
    contact: {
      whatsappNumber: "34600000000",
      email: "contacto@dominguezsolutions.com",
      phone: "+34600000000"
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
