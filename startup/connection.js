const mongooseConnection = async mongoose => {
  try {
    process.env.MONGO_URI
      ? await mongoose.connect(process.env.MONGO_URI)
      : await mongoose.connect(`mongodb://localhost/nytreact`);
  } catch (err) {
    console.log(`Error: ${err.messages}`);
  }
};

export default mongooseConnection;
