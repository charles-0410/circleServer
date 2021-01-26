const Relation = require('../models/relations')
const User = require('../models/users')

class RelationCtl {
  async find(ctx) {
    ctx.body = await Relation.find()
  }
  async create(ctx) {
    ctx.verifyParams({
      myId: { type: 'string', required: true },
      user: { type: 'string', required: true },
    });
    const { myId, user } = ctx.request.body;
    const both1 = `${myId}|${user}`;
    const both2 = `${user}|${myId}`;
    const repeatedRelation = await Relation.findOne({ $or: [{both: both1}, {both: both2}] });
    if (repeatedRelation) {
      // 顺便返回对方信息
      const userInfo = await User.findById(user)
      ctx.body = { userInfo, relation: repeatedRelation };
      return;
    }
    const relation = await new Relation({ both: both1, creator: myId }).save();
    const userInfo = await User.findById(user)
    ctx.body = { userInfo, relation };
  }
}

module.exports = new RelationCtl();