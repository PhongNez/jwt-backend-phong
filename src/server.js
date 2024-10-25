import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connection from './config/connectDB'
require('dotenv').config()
const PORT = process.env.PORT || 8081;
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sequelize
connection()
//Config view engine
configViewEngine(app);

// init web routes
initWebRoutes(app);

app.listen(PORT, () => {
    console.log("JWT is running  on the port = " + PORT);
})