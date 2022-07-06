const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
require('dotenv').config();
const UserRouter = require('./routers/Users');

app.use(cors());
app.use(express.json());
app.use('/users', UserRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {console.log(`server running on port ${process.env.PORT}`);
console.log('0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')});
});