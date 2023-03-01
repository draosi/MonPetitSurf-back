const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema({
    username: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now()},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    spotId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spots',
        required: true
    }
})

module.exports = mongoose.model('Comments', commentsSchema)