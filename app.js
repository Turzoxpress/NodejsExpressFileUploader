const express = require('express')
const app = express()
const port = 6000

const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads');
    },
    filename(req, file, cb) {
      console.log("got path : "+ file.originalname);
        cb(null, file.originalname);
    }
})
const uploadFileCustom = multer({ storage });




app.get('/welcome', (req, res) => {
 
  return res.json({status : 200, message : 'File Uploader is working'})
})


app.post('/singleImageUpload', uploadFileCustom.single("photo"), function (req, res, next) {
    
    return res.json({status : 200, message : 'Single image file uploaded'})
  })


  
app.post('/multipleImageUpload', uploadFileCustom.array('photos', 12), function (req, res, next) {
    
    return res.json({status : 200, message : 'Multiple image files uploaded'})
  })

app.listen(port, () => {
  console.log(`Uploader server listening on port ${port}`)
})