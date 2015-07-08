'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WebsiteSchema = new Schema({
  url: String,
  submittedBy: String
});

module.exports = mongoose.model('Website', WebsiteSchema);