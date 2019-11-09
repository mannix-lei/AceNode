const User = require('../modle/user');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const userService = {
    findAllUser: async user => {
        try {
            const options = {};
            if (user.name) {
                options.name = '%' + user.name + '%'
            }
            if (user.mobile) {
                options.mobile = user.mobile;
            }
            if (user.email) {
                options.email = user.email;
            }
            const res =  await User.findAndCountAll({
                raw: true,
                offset: Number(user.pageNo) - 1,
                limit: Number(user.pageSize),
                order: [
                    ['createTime', 'DESC']
                ],
                where: options,
            });
            return res;
        } catch (error) {
            throw error;
        }
    },

    findOne: async id => {
        try {
            return await User.findAll({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw error;
        }
    },
    addUser: async user => {
        const userItem = {
            id: Math.floor(Math.random() * Math.floor(9999999)),
            createTime: new Date().toLocaleString(),
            updateTime: new Date().toLocaleString(),
            status: 0
        };
        await Object.assign(userItem, user);
        return await User.create(userItem);
    },
    delUser: async id => {
        return await User.destroy({
            where: {
                id: id
            }
        });
    },
    updateUser: async user => {
        return await User.update(
            {
                name: user.name,
                password: user.password,
                email: user.email,
                mobile: user.mobile,
                updateTime: new Date().toLocaleString()
            },
            {
                where: {
                    id: user.id
                }
            }
        );
    }
};

module.exports = userService;
