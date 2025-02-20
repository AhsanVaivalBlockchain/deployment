const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs'); // For password hashing
const EmployeeModel = require('./models/Employee'); // Import the Employee model
const app = express();

// Middleware setup: Parse JSON request bodies and enable CORS
app.use(express.json());
app.use(cors());

// MongoDB connection (using a correct local connection string)
// For remote connection, update the connection string accordingly
mongoose
  .connect('mongodb://127.0.0.1:27017/employee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Register endpoint (fixed route without extra space)
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await EmployeeModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new employee
    const newEmployee = await EmployeeModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Registration successful", employee: newEmployee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error during registration" });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await EmployeeModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "No user found with that email" });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // If login is successful
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error during login" });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
