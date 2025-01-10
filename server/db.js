const mongoose=require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
      await mongoose.connect(process.env.MONGO_URI, {
        
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit process with failure
    }
  };
  
  module.exports={connectDB}