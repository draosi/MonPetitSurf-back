const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spotsSchema = new Schema({
    spot_name: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    commentsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments',
        required: false,
    }
})

module.exports = mongoose.model('Spots', spotsSchema)