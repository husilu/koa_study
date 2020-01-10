const user_Col = require('../models/user.js');

const postUser = async (ctx, next) => {
  const req = ctx.request.body;
  const user = await user_Col.create({username:req.username, password:req.password});

  ctx.body = {
    mas: 'success',
    desc: 'create success',
    data: user
  }
}

module.exports = {
  postUser
}