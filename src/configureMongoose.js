import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const configureMongoose = databaseName => {
  mongoose.connect(`mongodb://${process.env.MONGO_URL || "mongo"}/${databaseName}`, {
    autoReconnect: true,
    useMongoClient: true
  });

  const db = mongoose.connection;

  db.on('error', err => {
    console.error('MongoDB connection error:', err);
  });

  db.once('open', () => {
    console.info('MongoDB connection is established');
  });

  db.on('disconnected', () => {
    console.error('MongoDB disconnected!');
    mongoose.connect(process.env.MONGO_URL || "mongo", {
      server: { auto_reconnect: true }
    });
  });

  db.on('reconnected', () => {
    console.info('MongoDB reconnected!');
  });
};

export default configureMongoose;
