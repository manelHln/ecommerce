const express = require("express");
const dotenv = require("dotenv").config();
const nodemon = require("nodemon");
const morgan = require("morgan");
const connectDB = require('./config/dbConfig')
const cors = require("./controllers/cors")
const productsRoute = require('./routes/productsRoute');
const { urlencoded } = require("express");
const app = express();
const path = require('path')

const port = process.env.PORT;

connectDB().catch(console.dir)

app.use('/uploads',express.static(path.join(__dirname, 'uploads')))
app.use(cors)
app.use(morgan("common"))
app.use(express.json())
app.use(urlencoded({extended: false}))


app.use('/api/products', productsRoute)

app.listen(port, () =>
  console.log(`Server started successfully on port! ${port}`)
);