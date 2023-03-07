const mongoose = require('mongoose')
require('dotenv').config()

try {
    const url = process.env.MONGODB_URI
    mongoose.connect(url)
    console.log('connected to MonPetitSurf_DB')
}
catch(err) {
    console.log(err)
}
