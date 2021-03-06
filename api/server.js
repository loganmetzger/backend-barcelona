const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const rsvpRouter = require("../rsvps/rsvp-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: "up and running" });
});

server.use("/rsvps", rsvpRouter);

module.exports = server;
