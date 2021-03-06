const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
require('dotenv').config();
const UsersRouter = require('./routers/Users');
const PostsRouter = require('./routers/Posts');
const CommentRouter = require('./routers/Comments');
const LikesRouter = require('./routers/Likes');

app.use(cors());
app.use(express.json());
app.get('/', async (req, res) => {
    return res.status(200).json({message: 'test'});
})
app.use('/users', UsersRouter);
app.use('/posts', PostsRouter);
app.use('/comments', CommentRouter);
app.use('/likes', LikesRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {console.log(`server running on port ${process.env.PORT}`);
console.log('0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')});
});