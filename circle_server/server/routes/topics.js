const Router = require('koa-router');
const router = new Router({ prefix: '/topics' });
const { find, create } = require('../controllers/topics');

router.get('/', find)
router.post('/', create)

module.exports = router;