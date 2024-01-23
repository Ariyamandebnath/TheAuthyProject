import dotenv from "dotenv";
import connectDB from "./db/db.js";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

// Configure dotenv package
dotenv.config({
    path: './.env'
});

// Connect to the Database with the backend
connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error(error);
        process.exit(1); // Exit the process if unable to connect to the database
    });

// Create Express app
const app = express();
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Middleware for handling errors
app.use((err, req, res, next) => {
<<<<<<< HEAD
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statuscode).json({
        success: false,
        message,
        statuscode
    });
});
=======
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });
>>>>>>> 4ff9575 (add sign in functionality)
