const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const cors = require('koa2-cors');

app.use(cors());
mongoose.connect('mongodb://localhost:27017/husilu', { useNewUrlParser: true }, err => {
  if (err) {
    console.error('Failed to connect to database');
  } else {
    console.log('Connecting database successfully');
  }
});

const example_router = require('./routes/api/example_router');
const user_router = require('./routes/api/user_router');

app.use(example_router.routes()).use(example_router.allowedMethods());
app.use(user_router.routes()).use(user_router.allowedMethods());

app.listen(3000, () => {
  console.log('[Koa] Server is starting at port 3000!')
})
