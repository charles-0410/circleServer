const Router = require('koa-router');
const router = new Router({ prefix: '/posts' });
const { find, create, delete: del } = require('../controllers/posts');

router.get('/', find)
router.post('/', create)
router.delete('/:id', del)

module.exports = router;
