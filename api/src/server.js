const Koa = require('koa');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const onerror = require('koa-onerror');
const logger = require('koa-logger');

const app = new Koa();

// error handler
onerror(app);

// replace with db
const things = ['my family', 'programming', 'music'];

/* json prettier middleware */
app.use(json());
// bodyparser middleware
app.use(bodyParser());
// logger
app.use(logger());



const router = require('./routes/routes');
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000, () => console.log('Server started.... '));
