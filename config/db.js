const mongoose = reqiure('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      UseFindAndModify: false
    })
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catct(err => {
      console.error(err.msg);
      process.exit(1);
    });
};

module.exports = connectDB;
