const Router = require('koa-router');
const router = new Router({ prefix: '/records' });
const { find, findByRelationId } = require('../controllers/chats');

router.get('/', find)
router.post('/:id', findByRelationId)

module.exports = router;
