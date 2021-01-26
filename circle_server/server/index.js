const Koa = require('koa');
const KoaBody = require('koa-body');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const mongoose = require('mongoose');
const routing = require('./routes');
const { connectionStr } = require('./config');
const app = new Koa();

mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('MongoDB 连接成功了！'));
mongoose.connection.on('error', console.error);

const server = require("http").createServer(app.callback());
// const io = require("socket.io")(server);

// io.on("connection", socket => {
//   console.log('1111')
//   socket.emit("send", "已连接到服务端socket");
//   socket.on('chat message', msg => {
//     console.log('message:' + msg)
//   })
// })

// websocket
let clients = [];
const WebpSocket = require('ws');
const handleOpen = () => {
  console.log('WebSocket Open')
}
const handleClose = () => {
  console.log('WebSocket Close')
}
const handleError = () => {
  console.log('WebSocket Error')
}
const handleConnection = (ws) => {
  console.log('WebSocket Connection')
  ws.on('message', (msg) => {
    console.log(msg)
    ws.id = msg
    clients.push(ws)
  })
}
const wss = new WebpSocket.Server({ port: 3001 })
wss.on('open', handleOpen);
wss.on('close', handleClose);
wss.on('error', handleError);
wss.on('connection', handleConnection);

// --------------

app.use(error({
  postFormat: (e, { stack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { stack, ...rest } // 定制返回格式
}));
app.use(KoaBody({}));
app.use(parameter(app));
routing(app);

// 私信创建消息路由
const Router = require('koa-router');
const chatRouter = new Router({ prefix: '/records' });
const { create } = require('./controllers/chats');

chatRouter.post('/', create, (ctx) => {
  // console.log(clients)
  // console.log(ctx.state)
  wss.clients.forEach(client => {
    // 发送消息给指定用户
    if (ctx.request.body.receiver == client.id) {
      client.send(JSON.stringify({ type: 1, record: ctx.state.record }))
    }
  })
})

app.use(chatRouter.routes()).use(chatRouter.allowedMethods());

// 创建服务
server.listen(3000, () => {
  console.log('运行成功！')
});
