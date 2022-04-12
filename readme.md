# How to upload files or images by Node.js and Express framework?

![Alt Upload files](/screenshots/cloud_upload.gif "Upload files")


This project is a demonstration about how to upload multiple files or images by Node.js and Express framework API. I am using **Multer** for uploading file/files.
 <br>

[Multer Official Documentation](https://www.npmjs.com/package/multer) 

To start this project just clone the repo and run these commands :
```python
npm install

npm start
```

## Detailed instruction

* Create a new directory <br>

```python
  sudo mkdir test
  cd test
  sudo mkdir uploads
  sudo chmod -R 777 uploads #otherwise files won't save into this folder

```
* Start a project <br>

```python 
  npm init #Complete all the steps to create a new project
```

* Install dependencies  <br>

```python 
  npm install express
  npm install multer

  # This will help you to restart server automatically after any changes
  npm install nodemon 
```

* Set up Multer for file upload  <br>

```python 
  const multer = require('multer');

  .................

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
```


* Upload single file  <br>

```python 
app.post('/singleImageUpload', uploadFileCustom.single("photo"), function (req, res, next) {
    
    return res.json({status : 200, message : 'Single image file uploaded'})
  })
```
<br><br>
![Alt Upload single file](/screenshots/u1.JPG "Upload single file")

* Upload mutiple files  <br>

```python 
app.post('/multipleImageUpload', uploadFileCustom.array('photos', 12), function (req, res, next) {
    
    return res.json({status : 200, message : 'Multiple image files uploaded'})
  })
```

<br><br>
![Alt Upload Upload mutiple files](/screenshots/u2.JPG "Upload Upload mutiple files")

