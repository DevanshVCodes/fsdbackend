const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

// Design Book Schema
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    date: String,
    image: String
});

// Create Book Model
const Book = mongoose.model('MyBook', BookSchema);

// Routes
app.post('/books', async (req, res) => {
    try {
        const newbook = new Book(req.body);
        await newbook.save();
        res.status(200).json(newbook);
    } catch (err) {
        res.status(500).json(err);
    }
});

// MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB connected');
        // Start server only after DB connection is successful
        app.listen(9000, () => {
            console.log("Server is running on port 9000");
        });
    })
    .catch((err) => {
        console.log("Error in connection", err);
    });
