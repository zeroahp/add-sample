const express = require("express");
const router = express.Router();
const multer = require("multer");

const SampleController = require("../controller/sample.controller");

//upload thumbnail
const upload = multer();
//Middlewares upload
const uploadCloundMiddleware = require('../middleware/uploadCloud.middlewares');

module.exports = function(app) {
    router.get("/", SampleController.index);
    
    router.post(
        "/create-sample", 
        // upload.single("thumbnail"),
        upload.fields([{ name: 'thumbnail', maxCount: 8 }]),
        uploadCloundMiddleware.uploadFields,
        SampleController.postSample
    );


    app.use("/", router);
};
