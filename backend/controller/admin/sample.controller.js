const SampleDatabase  = require("../../model/database.model");

module.exports.index = async (req, res) => {
    const sample = await SampleDatabase.find({
        deleted: false,
    })
    res.send(sample);
}


module.exports.postSample = async (req, res) => {
    console.log("req.body", req.body);
        let sampleObject = {
            name: req.body.name,
            // user: req.body.user,
            size: req.body.size,
            color: req.body.color,
            // thumbnail: req.body.thumbnail,
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


