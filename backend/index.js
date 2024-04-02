const express = require("express");
const cors = require("cors");
const database = require("./config/database");

const app = express();
const router = express.Router();

require("dotenv").config();

database.connect();

app.use(express.json());
app.use(cors());

const routeApi = require("./routes/sample.route")
routeApi(app);

const port = process.env.PORT || 3001; // Setting default port to 3000 if PORT is not provided in .env file
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


