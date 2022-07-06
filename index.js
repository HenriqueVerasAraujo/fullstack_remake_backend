const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
require('dotenv').config();
const UserRouter = require('./routers/Users');
const PostRouter = require('./routers/Posts');

app.use(cors());
app.use(express.json());
app.use('/users', UserRouter);
app.use('/posts', PostRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {console.log(`server running on port ${process.env.PORT}`);
console.log('0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')});
});