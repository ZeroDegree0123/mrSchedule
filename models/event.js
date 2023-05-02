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
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User'}

}, {
    timestamps: true
})

module.exports = mongoose.model('Event', eventSchema);