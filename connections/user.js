const mongoose = require('mongoose');
const x = mongoose.connect('mongodb://localhost/userdatabase', {useNewUrlParser: true})
.then(() => {
    console.log("dbconnected")
})
.catch((error) => {
    console.log(error)
})
