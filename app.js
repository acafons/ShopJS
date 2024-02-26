const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

const app = express();

// app.engine(
//   "hbs",
//   expressHbs.engine({
//     extname: "hbs",
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//   })
// ); // Express doesn't have handlebars internally. It is necessary to include it.
// app.set("view engine", "pug"); // pug is handled internally by express. We don't need to include it in engine
// app.set("view engine", "hbs");
app.set("view engine", "ejs");
// Don't need to set where is located the view.
// By default express js already looks at ./views.
// It is only mandatory if the folder is different.
app.set("views", "./views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
