const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    message:{ 
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User'}

}, {
    timestamps: true
})

module.exports = mongoose.model('Event', eventSchema);