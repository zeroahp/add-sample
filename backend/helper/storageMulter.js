const multer = require("multer");

const storage = multer.diskStorage({

    filename: function (req, file, cb) {
      console.log(" storage file", file);
      const fileName = Date.now() + "-" + file.originalname;
      cb(null, fileName);
    },
});

  const upload = multer({storage: storage});

  module.exports = upload;