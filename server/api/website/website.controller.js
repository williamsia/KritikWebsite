/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Website = require('./website.model');

// Get list of things
exports.index = function(req, res) {
    Website.find(function (err, websites) {
    if(err) { return handleError(res, err); }
    return res.json(200, websites);
  });
};

// Get a single thing
exports.show = function(req, res) {
    Website.findById(req.params.id, function (err, website) {
    if(err) { return handleError(res, err); }
    if(!website) { return res.send(404); }
    return res.json(website);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
    Website.create(req.body, function(err, website) {
    if(err) { return handleError(res, err); }
    return res.json(201, website);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
    Website.findById(req.params.id, function (err, website) {
    if (err) { return handleError(res, err); }
    if(!website) { return res.send(404); }
    var updated = _.merge(website, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, website);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
    Website.findById(req.params.id, function (err, website) {
    if(err) { return handleError(res, err); }
    if(!website) { return res.send(404); }
        website.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}