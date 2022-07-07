const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
require('dotenv').config();
const UsersRouter = require('./routers/Users');
const PostsRouter = require('./routers/Posts');
const CommentRouter = require('./routers/Comments');

app.use(cors());
app.use(express.json());
app.use('/users', UsersRouter);
app.use('/posts', PostsRouter);
app.use('/comments', CommentRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {console.log(`server running on port ${process.env.PORT}`);
console.log('0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')});
});