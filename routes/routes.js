"use strict";
import { Router } from "express";
const router = Router();

import { Login, Register } from "./../controllers/AuthControler.js";

router.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

router.get("/register", Register.index);
router.post("/register", Register.store);

router.get("/login", Login.index);
router.post("/login", Login.store);

router.use((req, res, next) => {
  if (!req.session.loggedin) {
    res.redirect("/login");
  } else {
    next();
  }
});

router.get("/home", (req, res) => {
  res.render("home");
});

export default router;
