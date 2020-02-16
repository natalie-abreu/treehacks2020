const express = require("express");
const path = require("path");
const router = express.Router();
const app = require("../app");
let dir = process.cwd() + "/client";

router.get("/healthcheck", (req, res) => {
  res.send("It works!");
});

router.get("/profile", (req, res) => {
  res.sendFile(path.join(dir + "/profile.html"));
});

router.get("/members", (req, res) => {
  res.sendFile(path.join(dir + "/members.html"));
});

router.get("/resources", (req, res) => {
  res.sendFile(path.join(dir + "/resources.html"));
});

router.get("/map", (req, res) => {
  res.sendFile(path.join(dir + "/map.html"));
});

module.exports = router;
