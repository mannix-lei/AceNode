const User = require('../modle/user');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const userService = {
    findAllUser: async user => {
        try {
            if (user.email || user.name || user.mobile) {
                return await User.findAll({
                    raw: true,
                    order: [
                        ['createTime', 'DESC']
                    ],
                    where: {
                        [Op.or]: [
                            { 
                                name: {
                                    [Op.like]: '%' + user.name + '%'
                                }
                            },
                            {
                                mobile: user.mobile,
                            },
                            {
                                email: user.email
                            }
                        ],
                    }
                });
            } else {
                return await User.findAll({
                    raw: true,
                    order: [
                        ['createTime', 'DESC']
                    ]
                });
            }
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
