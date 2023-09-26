const express = require("express");
const { BlogPost } = require("../controller/BlogController");
const multer = require("multer");
const router = express.Router();



// File Upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+file.fieldname)
    }
})

const upload = multer({ storage: storage })

router.post('/api/blogpost',upload.single('BlogPostImage'),BlogPost)






module.exports = router