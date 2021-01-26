const Post = require('../models/posts')

class PostCtl {
  async find(ctx) {
    const { per_page = 5 } = ctx.query;
    const page = Math.max(ctx.query.page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    ctx.body = await Post.find({ content: new RegExp(ctx.query.q) })
      .limit(perPage).skip(page * perPage).populate('user topic');
  }
  async create(ctx) {
    ctx.verifyParams({
      content: { type: 'string', required: true },
      user: { type: 'string', required: true },
      image: { type: 'array', required: false },
      topic: { type: 'string', required: false }
    })
    const post = await new Post({ ...ctx.request.body }).save();
    ctx.body = post;
  }
  async delete(ctx) {
    const post = await Post.findByIdAndRemove(ctx.params.id);
    if (!post) { ctx.throw(404, '帖子不存在'); }
    ctx.status = 204;
  }
}

module.exports = new PostCtl()