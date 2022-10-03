const mongoose = require("mongoose"); // biblioteca que permite mexer no banco de dados pelo javascript

// schema = collection. A mesma collection que ta no banco de dados é a mesma que vai estar no código.
const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("user", userSchema);
