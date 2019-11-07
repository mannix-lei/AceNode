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
                data: res,
            }
        } else {
            ctx.status = 500;
            ctx.body = {
                msg: 'failed',
                data: [],
            }
        }
    } catch (err) {
        throw err;
    }
    
};

const addUser = async (ctx, next) => {
    try {
        const res = await userService.addUser(ctx.request.user);
        if (res) {
            ctx.status = 200;
            ctx.body = {
                msg: 'success',
                data: res,
            }
        } else {
            ctx.status = 500;
            ctx.body = {
                msg: 'failed',
                data: null,
            }
        }
    } catch (error) {
        throw error;
    }
}

/**
 * 根据id查询用户
 * @param {number} id
 */
const findUserById = async (ctx, next) => {
    ctx.status = 200;
    ctx.body = {
        msg: 'success',
        data: await userService.findOne(ctx.request.id),
    }
}

/**
 * 登录
 * @param {*} ctx 
 * @param {*} next 
 */
const login = async (ctx, next) => {
    ctx.status = 200;
    const user = await userService.login(ctx.request.number);

    if (user.password = ctx.request.password) {
        ctx.body = {
            msg: 'success',
            data: user,
        }
    } else {
        ctx.body = {
            msg: 'failed',
            data: user,
        }
    }   
}

module.exports = {
    findAllUser,
    findUserById,
    login,
    addUser,
};