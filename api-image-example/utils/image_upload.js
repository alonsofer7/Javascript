const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer');
const path = require('path');
const multerS3 = require('multer-s3')

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID
    }

})

const fileFilter = (req, file, cb) => {

    if (!file) {
        req.imageError = "Image not uploaded!";
        return cb(null, false);
    }
    else if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        req.imageError = "Image must be jpg|jpeg|png|gif";
        return cb(null, false);
    }

    cb(null, true);
};

const storage =  multerS3({
      s3: s3,
      bucket: process.env.AWS_BUCKET,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    });

// const storage = multer.diskStorage({ //manera antigua de hacerlo
//     destination: ( req, file, cb ) => {
//         cb(null, 'public' + process.env.STATIC_FILES_URL);
//     },
//     filename: ( req, file, cb ) => {
//         console.log(file.path);
//         console.log(file.originalname);

//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

module.exports = multer({ fileFilter, storage });