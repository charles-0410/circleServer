const Topic = require('../models/topics')

class TopicCtl {
  async find(ctx) {
    const { per_page = 5 } = ctx.query;
    const page = Math.max(ctx.query.page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    ctx.body = await Topic.find({ title: new RegExp(ctx.query.q) })
      .limit(perPage).skip(page * perPage);
  }
  async create(ctx) {
    ctx.verifyParams({
      title: { type: 'string', required: true },
      introduction: { type: 'string', required: false }
    })
    const { title } = ctx.request.body;
    const repeatedTopic = await Topic.findOne({ title });
    if (repeatedTopic) { ctx.throw(409, '话题已存在'); }
    const topic = await new Topic(ctx.request.body).save();
    ctx.body = topic;
  }
}

module.exports = new TopicCtl();