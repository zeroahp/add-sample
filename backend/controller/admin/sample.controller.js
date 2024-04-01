const SampleDatabase  = require("../../model/sample.model");

module.exports.index = async (req, res) => {
    try {
        const sample = await SampleDatabase.find({
            deleted: false,
        });
        res.send(sample);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
}


module.exports.postSample = async (req, res) => {
    console.log("req.body", req.body);
        let sampleObject = {
            name: req.body.name,
            user: req.body.user,
            size: req.body.size,
            color: req.body.color,
            thumbnail: Array.isArray(req.body.thumbnail) ? req.body.thumbnail : [req.body.thumbnail],
            youAre: req.body.youAre,
            category: req.body.category,
            description: req.body.description,
            createAt: new Date(),
        }
    console.log("sampleObject", sampleObject);
    const newSample = new SampleDatabase(sampleObject);
    await newSample.save();
    console.log("Data saved successfully");
    res.send("Data saved successfully");
    
}


