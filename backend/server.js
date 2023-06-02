const express = require("express");
const dotenv = require("dotenv").config();
const nodemon = require("nodemon");
const morgan = require("morgan");
const connectDB = require("./config/dbConfig");
const cors = require("./controllers/cors");
const productsRoute = require("./routes/productsRoute");
const userRoute = require("./routes/authRoute");
const articleRoute = require("./routes/articlesRoute");
const categoriesRoute = require("./routes/categoriesRoute");
const cartRoute = require("./routes/cartRoute");
const refreshRoute = require("./routes/refreshTokenRoute");
const logoutRoute = require("./routes/logoutRoute");
const { urlencoded } = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

const port = process.env.PORT;

// connectDB().catch(console.dir)
connectDB();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors);
app.use(morgan("common"));
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/products", productsRoute);
app.use("/api/auth", userRoute);
app.use("/api/articles", articleRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/cart", cartRoute);
app.use("/api/refresh", refreshRoute);
app.use("/api/logout", logoutRoute);

app.listen(port, () =>
  console.log(`Server started successfully on port! ${port}`)
);
