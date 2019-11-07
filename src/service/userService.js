const query = require('../mysql');
const sqlMap = require('../sql/user');

const userService = {
    findAllUser: async () => {
        return await query(sqlMap.findAllUser, null);
    },

    findOne: async (id) => {
        return await query(sqlMap.findUserById, id);
    },

    login: async (number) => {
        return await query(sqlMap.findUserByPhone, number);
    }
}

module.exports = userService;