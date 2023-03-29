const Event = require('../../models/event');

module.exports = {
    index,
    create,
}

async function index(req, res) {
    try {
        const events = await Event.find({});
        res.json(events)
    } catch (err) {
        res.send(err)
    }
}

async function create(req, res) {
    try {
        const newEvent = new Event({
            name: req.body.name,
            message: req.body.message,
            date: req.body.date,
            time: req.body.time,
            timestamps: req.body.timestamps,
            user: req.body.user
        });
        await newEvent.save();
        res.json(newEvent)
        
    } catch (err){
        console.log(err)
        res.send(err)
    }
}