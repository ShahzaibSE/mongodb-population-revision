'use strict'

const dbModels = require('./../schema+model/schema+model.js').dataModels;

exports.modelInjector = {
    person : dbModels.person(),
    story : dbModels.story()
};  