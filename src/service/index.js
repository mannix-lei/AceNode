'use strict';
const Service = require('koa-service');
const path = require('path');

const service = new Service({
    serviceRoot: path.join(__dirname, 'service'),
})
module.exports = service;

