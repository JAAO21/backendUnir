const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoURI = process.env.MongoURI;

console.log("🛠️ Valor de MONGO_URI aqui en mongo:", mongoURI);
const connectDB = async () => {
  setTimeout(async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log("✅ Conectado a MongoDB");
    } catch (err) {
      console.error("❌ Error al conectar a MongoDB", err);
      process.exit(1);
    }
  }, 5000);
};

module.exports = connectDB;
