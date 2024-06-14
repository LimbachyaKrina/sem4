const multer = require("multer");
const expr = require("express");
const path = require("path"); // Import the path module
const app = expr();
const storage = multer.diskStorage({
    destination: "myfolder",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        // this will return the file name here, the control name name = upload then it will take upload.jpg, file.originalname
    }
})
// this is a variable that I am creating
// cb = callback
// null means error (here)
const maxSize = 1024 * 1024 * 1024 * 1024 * 1;
var upload = multer({
    storage: storage,
    // the above variable that we have create I have passed here
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        var filetypes = /pdf/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb("error: file uploaded is problematic");
        }
    }
}).array("mypic", 5);
// this single will link the fieldname and multer
// and single means that it will let me only upload single file 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index1.html");
});
app.post("/uploadfile", (req, res) => {
    // this upload variable is of multer which will let me upload the file  
    upload(req, res, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("success");
        }
    });
}).listen(3000); // this line was separated from the previous line in the error message
