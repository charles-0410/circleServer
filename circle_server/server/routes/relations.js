const Router = require('koa-router');
const router = new Router({ prefix: '/relations' });
const { find, create } = require('../controllers/relations');

router.get('/', find)
router.post('/', create)

module.exports = router;
