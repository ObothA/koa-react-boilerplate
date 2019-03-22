'use strict'; 
const router = require('koa-router')();

router.get('/react', async (ctx, next) => {
	await ctx.render('index', {
		version: 1,
		commit: 1,
		STYLE_URL: '',
		SCRIPT_URL: ''
	});
});

router.get('/bar', (ctx) => {
	ctx.body = 'this is a users/bar response';
});
module.exports = router;

