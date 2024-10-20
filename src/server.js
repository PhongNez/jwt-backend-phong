import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require('dotenv').config()
const PORT = process.env.PORT || 8081;
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Config view engine
configViewEngine(app);

// init web routes
initWebRoutes(app);

app.listen(PORT, () => {
    console.log("JWT is running  on the port = " + PORT);
})