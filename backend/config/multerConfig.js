const multer = require("multer");

//Multer configuration for file uploading
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
      const ext = file.mimetype.split("/");
      cb(null, `${file.fieldname}_${uniqueSuffix}.${ext[1]}`);
    },
  });
  const uploads = multer({ storage: storage });

  
module.exports = uploads