const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  subscribersController = require("./controllers/subscribersController"),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber");
  mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://inori:j0ZB1XCcQSEZDbTQ@cluster0-ppgok.azure.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/", homeController.index);
app.get("/about", homeController.about);
app.get("/contact", subscribersController.getSubscriptionPage);
app.get("/release", homeController.release);
app.get("/podcast", homeController.podcast);
app.post("/thanks", subscribersController.saveSubscriber);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

    
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});