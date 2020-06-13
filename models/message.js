const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// create geo location Schema

// create ninja Schema and model

const MessageSchema = new Schema({
    text: {
        type: String,
        required: [true, "Text field is required"]
    },
    date: {
        type: String,
        required: [true, "Date field is required"]
    },


    // add in geo location
})


const Message = mongoose.model('message', MessageSchema)


module.exports = Message;