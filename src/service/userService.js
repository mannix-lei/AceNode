const User = require('../modle/user');

const userService = {
    findAllUser: async () => {
        try {
            return await User.findAll();
        } catch (error) {
            throw error;
        }
    },

    findOne: async (id) => {
        return await User.findOne();
    },

    login: async (number) => {
        // return await query(sqlMap.findUserByPhone, number);
    },
    addUser: async (user) => {
        await console.log(user)
        console.log('====================================')
        
        console.log('====================================')
        // return await User.create(user);
    }
};

module.exports = userService;
