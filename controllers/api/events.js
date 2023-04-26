const Event = require('../../models/event');

module.exports = {
    index,
    create,
    show,
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

async function show(req, res) {
    try {
        const event = await Event.findById(req.params.id)
        res.status(200).json(event);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}