const jwt = require('koa-jwt');
const Router = require('koa-router');
const router = new Router({ prefix: '/users' });
const { find, create, login, update } = require('../controllers/users');

const { secret } = require('../config')
const auth = jwt({ secret });

router.get('/', find);
router.post('/', create);
router.post('/login', login);
router.patch('/:id', update)

module.exports = router;