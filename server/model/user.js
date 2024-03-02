const mongoose = require('mongoose');

const { Schema, model } = mongoose;

async function main() {
  await mongoose.connect(
    'mongodb+srv://admin_nehal:5k2hZ1sUBWfOZHse@cluster0.v9j75kk.mongodb.net/user?retryWrites=true&w=majority'
  );
  console.log('Database Connected');
}

main().catch((err) => console.log(err));

const userSchema = new Schema({
  username: String,
  password: String,
});

const User = model('User', userSchema);

module.exports = { User };
