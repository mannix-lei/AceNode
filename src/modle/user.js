const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.DOUBLE,
        primaryKey: true,
        field: 'user_id',
        comment: '用户id',
    },
    name: {
        type: Sequelize.STRING,
        field: 'user_name',
        comment: '用户名',
    },
    password: {
        type: Sequelize.STRING,
        field: 'password',
        comment: '密码',
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        comment: '邮箱',
    },
    mobile: {
        type: Sequelize.STRING,
        field: 'mobile',
        comment: '电话',
    },
    createTime: {
        type: Sequelize.STRING,
        field: 'create_time',
        comment: '创建时间',
    },
    updateTime: {
        type: Sequelize.STRING,
        field: 'update_time',
        comment: '更新时间',
    },
    status: {
        type: Sequelize.TINYINT,
        field: 'status',
        comment: '拓展字段',
    }
})

module.exports = User;
