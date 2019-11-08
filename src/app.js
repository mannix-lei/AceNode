const Koa = require('koa');
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser');
const error = require('koa-error');
const router = require('./routes/index');
const service = require('./service/index');

const app = new Koa();
const cors = require('koa2-cors');
app.use(cors({
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
}));
app.use(bodyParser());
app.use(logger())
app.use(error());
app.use(service);
app.use(router.routes(), router.allowedMethods());


app.listen(3000);
console.log('app started at port 3000');