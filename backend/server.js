const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const dbConnection = require("./config/dbConnection");
const globalError = require("./middlewares/errorMiddleware");
const ApiError = require("./utils/ApiError");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

// Import routes
const AllRoutes = require("./routes");

dotenv.config({ path: "config.env" });

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log(`${process.env.NODE_ENV}`);
}

// Static files
app.use(
    express.static(path.join(__dirname, "public"), {
        setHeaders: (res, path, stat) => {
            if (path.endsWith(".js")) {
                res.set("Content-Type", "application/javascript");
            }
        },
    })
);

// CORS settings
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Connect to DB
dbConnection();

// Routes
AllRoutes(app);

// Handle unknown routes
app.all("*", (req, res, next) => {
    return next(new ApiError(`Can't find this route ${req.originalUrl}`, 400));
});

// Global error handling
app.use(globalError);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (error) => {
    console.error(`Unhandled Rejection: ${error}`);
    server.close(() => {
        console.log("Shutting down...");
        process.exit(1);
    });
});