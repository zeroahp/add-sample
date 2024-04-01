const express = require("express");
const cors = require("cors");
const database = require("./config/database");
const SampleController = require("./controller/admin/sample.controller");

const app = express();
const router = express.Router();

require("dotenv").config();

database.connect();

app.use(express.json());
app.use(cors());

// Routes
// router.get("/", SampleController.index);
// router.post("/post", SampleController.postSample);

const clientRoute = require("./routes/admin/sample.route")
clientRoute(app);

const port = process.env.PORT || 3001; // Setting default port to 3000 if PORT is not provided in .env file
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


