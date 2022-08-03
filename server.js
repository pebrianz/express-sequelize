"use strict";
import express from "express";
import session from "express-session";
import flash from "connect-flash";
import expressEjsLayouts from "express-ejs-layouts";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import http from "http";
import dotenv from "dotenv";
import Routes from "./routes/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(
  session({
    secret: process.env.MY_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(express.static(join(__dirname, "dist")));
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout", "layouts/layout");
//app.set("layout extractScripts", true);
app.use(express.urlencoded({ extended: false }));
app.use(Routes);

server.listen(3000, () => {
  console.log("listening on *:3000");
});
