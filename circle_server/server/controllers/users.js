const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/users');
const { secret } = require('../config');

class UsersCtl {
  async find(ctx) {
    const { per_page = 5 } = ctx.query;
    const page = Math.max(ctx.query.page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    ctx.body = await User.find({ nickName: new RegExp(ctx.query.q) })
      .limit(perPage).skip(page * perPage);
  }
  async checkUseridExist(ctx, next) {
    const { userId } = ctx.request.body;
    const user = await User.find({ userId });
    if (!user) {
      await next();
    }
  }
  async create(ctx) {
    ctx.verifyParams({
      userId: { type: 'string', required: true },
      nickName: { type: 'string', required: true },
      password: { type: 'string', required: true }
    });
    const { userId, nickName, password } = ctx.request.body;
    const repeatedUser = await User.findOne({ userId });
    if (repeatedUser) { ctx.throw(409, '用户ID已存在'); }
    const user = await new User(ctx.request.body).save();
    ctx.body = user
  }
  async update(ctx) {
    ctx.verifyParams({
      avatar_url: { type: 'string', required: true }
    });
    const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body);
    ctx.body = user;
  }
  async login(ctx) {
    ctx.verifyParams({
      userId: { type: 'string', required: true },
      password: { type: 'string', required: true },
    })
    const user = await User.findOne(ctx.request.body);
    if (!user) { ctx.throw(401, '用户名或密码不正确'); }
    const { _id, userId } = user;
    const token = jsonwebtoken.sign({ _id, userId }, secret, { expiresIn: '1d' });
    ctx.body = { token, user };
  }
}

module.exports = new UsersCtl();