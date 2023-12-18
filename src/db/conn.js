const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/ContactData').then(()=>{
    console.log('Connection Successful')
}).catch((err)=>{
    console.log("There is error occured!", err)
})