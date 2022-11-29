const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/product",{
    //used localhost instead of 172.0.0.1:27017!!
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err))