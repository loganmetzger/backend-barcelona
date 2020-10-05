const express = require("express");
const router = express.Router();

const Rsvps = require("./rsvp-model");

router.get("/", (req, res) => {
  Rsvps.get()
    .then((rsvps) => {
      res.status(200).json({ data: rsvps });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res) => {
  Rsvps.getById()
    .then((rsvp) => {
      if (!rsvp) {
        res.status(404).json({ message: "rsvp not found" });
      } else {
        res.status(200).json({ data: rsvp });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.post("/", (req, res) => {
  Rsvps.add()
    .then((rsvp) => {
      res.status(201).json({ data: rsvp });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

module.exports = router