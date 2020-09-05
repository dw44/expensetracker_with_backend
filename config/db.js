const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log(`MongoDB Connected: ${connection.host}`.cyan.underline.bold);
  } catch (err) { 
    console.log(`Error: ${err}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;