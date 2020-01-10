const Router = require('koa-router');
const router = new Router();
// 导如对应的控制器
const user_controller = require('./../../app/controllers/user_controller');

router.post('/createuser', user_controller.postUser);

module.exports = router;