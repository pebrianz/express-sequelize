"use strict";
import db from "./../models/index.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
const { User } = await db;
dotenv.config();

class Register {
  static index = (req, res) => {
    if (!req.session.loggedin) {
      const [error] = req.flash("error");
      const [success] = req.flash("success");
      res.render("register", { error, success });
    } else {
      res.redirect("/home");
    }
  };

  static store = async (req, res) => {
    const { name, username, password: plainText } = req.body;
    const key = process.env.MY_SECRET_KEY;
    const strPassword = plainText + key + username;
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(strPassword, salt);

    try {
      await User.create({
        name,
        username,
        password,
      });
      req.session.loggedin = true;
      req.session.username = username;
      re.session.name = name;
      res.redirect("home");
    } catch (e) {
      if (e.errors) {
        const error = e.errors[0].message;
        console.log(error);
        req.flash("error", error);
      }
      res.redirect("back");
    }
  };
}

class Login {
  static index = (req, res) => {
    if (!req.session.loggedin) {
      const [error] = req.flash("error");
      const [success] = req.flash("success");
      res.render("login", { error, success });
    } else {
      res.redirect("/home");
    }
  };

  static store = async (req, res) => {
    const { username, password: plainText } = req.body;
    const key = process.env.MY_SECRET_KEY;
    try {
      const user = await User.findOne({
        where: {
          username: username,
        },
      });
      const strPassword = plainText + key + username;
      const isPassword = await bcrypt.compare(strPassword, user.password);
      console.log("is password " + isPassword);
      req.session.loggedin = true;
      req.session.username = user.username;
      req.session.name = user.name;
      res.redirect("/home");
    } catch (e) {
      console.log(e);
    }
  };
}

export { Login, Register };
