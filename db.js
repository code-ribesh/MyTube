import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log('✅ connected to db....');
const handleError = () => console.log('❌ error on db connection....');

db.once('open', handleOpen);
db.on('error', handleError);
