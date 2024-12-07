const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./Routes/auth");
const noteRoutes = require("./Routes/notes");

const app = express();
const PORT = process.env.PORT || 6969;  

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(
  cors({
    origin: ['https://learnio-web-app.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

// MongoDB Connection
const connectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log("MongoDB Connected Successfully");
  } catch (error) {
      console.error("MongoDB Connection Error:", error);
      setTimeout(connectDB, 5000);
  }
};


// Route Handlers
app.get("/", (req, res) => {
  res.send("Server Is Running");
});

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
app.use("/files", express.static("files"));

// Start the server after the DB is connected
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
  });
});
