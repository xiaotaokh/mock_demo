const Router = require("koa-router");
const router = Router();

const c = require('./a/c')

router.post('/a', function (ctx, next) {
	ctx.set('Content-Type', 'application/json');
	var data = {
		code: 200,
		message: 'ok',
		data: {
			name: "a"
		}
	};
	ctx.body = JSON.stringify(data);
});


router.get('/a', function (ctx, next) {
	ctx.set('Content-Type', 'application/json');
	var data = {
		code: 200,
		message: 'ok',
		data: {
			name: "a-get"
		}
	};
	ctx.body = JSON.stringify(data);
});


// 路由a
router.use('/a', c.routes());
exports = module.exports = router;
