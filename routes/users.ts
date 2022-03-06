import type { RequestHandler } from "express";

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('I am a user, respond with a resource');
} as RequestHandler);

module.exports = router;
