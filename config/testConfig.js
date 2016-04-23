'use strict';

var app = require('../app');
var supertest = require('supertest');

var server = supertest.agent(app);

module.exports = server;