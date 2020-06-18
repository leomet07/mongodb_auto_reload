const mongoose = require('mongoose');
const Message = require("./models/message");
// set up app

// connect to mongo db
mongoose.connect('mongodb://localhost/realtime_message', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log("connected")
})
mongoose.Promise = global.Promise


// Use connect method to connect to the server
async function read() {
    let messages;
    try {
        messages = await Message.find({

        })

        let preview = JSON.stringify(messages).slice(0, 12)
        console.log("Read: ", preview)

        return messages


    } catch (err) {
        console.log(err);
        return err
    } finally {

    }
}
// Use connect method to connect to the server
async function write_message(message) {
    let data;
    try {
        data = await Message.create({
            text: message,
            date: "time"
        })

        console.log("Wrote: " + JSON.stringify(data))
        return data;




    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    read: read,
    write_message: write_message

};