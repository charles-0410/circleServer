const Chat = require('../models/chats')

class ChatCtl {
  async find(ctx) {
    ctx.body = await Chat.find();
  }
  async create(ctx, next) {
    ctx.verifyParams({
      relationId: { type: 'string', required: true },
      sender: { type: 'string', required: true },
      receiver: { type: 'string', required: true },
      content: { type: 'string', required: true }
    });
    /* 待补：需要检查关系是否存在 */
    const record = await new Chat({ ...ctx.request.body }).save();
    if (record) {
      ctx.state.record = record;
      next();
    }
    ctx.body = record;
  }
  async findByRelationId(ctx) {
    // ctx.verifyParams({
    //   relationId: { type: 'string', required: true }
    // });
    const relationId = ctx.params.id;
    const record = await Chat.find({ relationId });
    ctx.body = record;
  }
}

module.exports = new ChatCtl();
