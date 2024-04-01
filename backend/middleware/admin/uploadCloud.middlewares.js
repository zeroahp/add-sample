const { uploadToCloudinary } = require("../../helper/uploadToCloudinary") 

module.exports.uploadClound = async (req, res, next) => {
  console.log("uploadClound req.file", req.file);
  console.log("uploadClound req.files", req.files);

  if(req.file){
    const result = await uploadToCloudinary(req.file.buffer);
    req.body[req.file.fieldname] = result;
  }
  next();
}


module.exports.uploadFields = async (req, res, next) => {  
  console.log('files', req.files)
  for (const key in req["files"]) {
    req.body[key] = [];

    const array = req["files"][key];
    for (const item of array) {
      const result = await uploadToCloudinary(item.buffer);
      req.body[key].push(result);
    }
  }

  next();
};