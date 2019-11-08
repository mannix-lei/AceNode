const userService = require('../service/userService');

/**
 * 查询所有用户
 */
const findAllUser = async (ctx, next) => {
    try {
        const res = await userService.findAllUser();
        if (res) {
            ctx.status = 200;
            ctx.body = {
                msg: 'success',
                data: res
            };
        } else {
            ctx.status = 500;
            ctx.body = {
                msg: 'failed',
                data: []
            };
        }
    } catch (err) {
        throw err;
    }
};

/**
 * 添加用户
 * @param {*} ctx 
 * @param {*} next 
 */
const addUser = async (ctx, next) => {
    try {
        const res = await userService.addUser(ctx.request.body.user);
        if (res) {
            ctx.status = 200;
            ctx.body = {
                msg: 'success',
                data: res
            };
        } else {
            ctx.status = 500;
            ctx.body = {
                msg: 'failed',
                data: null
            };
        }
    } catch (error) {
        throw error;
    }
};

/**
 * 删除用户
 * @param {*} ctx 
 * @param {*} next 
 */
const delUser = async (ctx, next) => {
    try {
        const res = await userService.delUser(ctx.request.body.id);
        if (res) {
            ctx.status = 200;
            ctx.body = {
                msg: 'success',
                data: res
            };
        } else {
            ctx.status = 500;
            ctx.body = {
                msg: 'failed',
                data: null
            };
        }
    } catch (error) {
        throw error;
    }
};

/**
 * 根据id查询用户
 * @param {number} id
 */
const findUserById = async (ctx, next) => {
    try {
        const res = await userService.findOne(ctx.request.query.id)
        ctx.status = 200;
        ctx.body = {
            msg: 'success',
            data: res[0],
        };
    } catch (error) {
        throw error;
    }
};

/**
 * 更新用户信息
 * @param {*} ctx 
 * @param {*} next 
 */
const updateUserById = async (ctx, next) => {
    try {
        const res = await userService.updateUser(ctx.request.body.user);
        if (res) {
            ctx.status = 200;
            ctx.body = {
                msg: 'success',
                data: res
            };
        } else {
            ctx.status = 500;
            ctx.body = {
                msg: 'failed',
                data: null
            };
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findAllUser,
    findUserById,
    addUser,
    delUser,
    updateUserById,
};
