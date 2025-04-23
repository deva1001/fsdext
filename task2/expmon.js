const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// 💥 MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/evilDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// 🧠 Mongoose Schema & Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  role: { type: String, default: "user" }
});
const User = mongoose.model("User", userSchema);

// ➕ Create User
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📥 Get All Users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 📥 Get User by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📝 Update User
app.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ❌ Delete User
app.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🚀 Start Server
app.listen(3000, () => {
  console.log("⚡ Server running at http://localhost:3000");
});
