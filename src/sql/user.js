'use-strict'
const sqlMap = {
    findUserById: 'SELECT * FROM user WHERE user_id = ?',
    findUserByPhone: 'SELECT * FROM user WHERE mobile = ?',
    findAllUser: 'SELECT * FROM user',
}

module.exports = sqlMap;