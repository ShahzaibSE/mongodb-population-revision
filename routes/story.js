'use strict'

const storyController = require('./../controllers/story.js');
const router = require('express').Router();

router.get('/stories',storyController.selectall);
router.post('/story',storyController.add);
router.put('/story',storyController.update);
router.delete('/story',storyController.delete);
router.get('/search',storyController.search);

module.exports = router;