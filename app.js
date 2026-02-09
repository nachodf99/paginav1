const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", {
    meta: {
      title: "Dominguez Solutions | Software, IA y Automatización",
      description: "Soluciones profesionales en software, IA y automatización para empresas que buscan eficiencia, solvencia y crecimiento digital."
    }
  });
});

app.post("/contacto", (req, res) => {
  res.status(200).render("index", {
    meta: {
      title: "Dominguez Solutions | Software, IA y Automatización",
      description: "Soluciones profesionales en software, IA y automatización para empresas que buscan eficiencia, solvencia y crecimiento digital."
    },
    success: true
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
