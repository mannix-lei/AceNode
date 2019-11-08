'use strict';
const Router = require('koa-router');
const userController = require('../controller/userController');

const router = new Router({
    prefix: '/api',
});

router.get('/getUserList', userController.findAllUser)
router.post('/addUser', userController.addUser)
router.post('/delUser', userController.delUser)
router.post('/updateUser', userController.updateUserById)
router.get('/getUserInfoById', userController.findUserById)


module.exports = router;
