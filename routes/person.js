'use strict'

const router = require('express').Router();

//Controllers
const personController = require('./../controllers/person.js');

router.post('/person',personController.add);

module.exports = router;
