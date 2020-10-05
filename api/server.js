const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const rsvpRouter = require("rsvpRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: "up and running" });
});

server.use("/rsvp", rsvpRouter);

module.exports = server;
