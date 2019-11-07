'use strict';
const Router = require('koa-router');
const userController = require('../controller/userController');

const router = new Router({
    prefix: '/api',
});

router.get('/getUserList', userController.findAllUser)
router.get('/login', userController.login)

module.exports = router;
