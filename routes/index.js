const express = require("express");
const path = require("path");
const router = express.Router();
const app = require("../app");

router.get("/healthcheck", (req, res) => {
  res.send("It works!");
});

router.get("/profile", (req, res) => {
  let dir = "/mnt/c/Users/Natalie Abreu/Desktop/treehacks2020/client";
  res.sendFile(path.join(dir + "/profile.html"));
});

router.get("/members", (req, res) => {
  let dir = "/mnt/c/Users/Natalie Abreu/Desktop/treehacks2020/client";
  res.sendFile(path.join(dir + "/members.html"));
});

router.get("/resources", (req, res) => {
  res.send("Resources will be here eventually");
  // let dir = "/mnt/c/Users/Natalie Abreu/Desktop/treehacks2020/client";
  // res.sendFile(path.join(dir + "/resouces.html"));
});

module.exports = router;
