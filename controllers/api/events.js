const Event = require('../../models/event');

module.exports = {
    index,
    create,
    show,
    remove,
    update
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

async function remove(req, res) {
    try {
        await Event.findByIdAndDelete({_id: req.params.id})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

async function update(req, res) {
    try {
        const event = await Event.findById(req.params.id);

        event.user = req.user._id;
        event.name = req.body.name;
        event.date = req.body.date;
        event.time = req.body.time;
        event.message = req.body.message;

        await event.save();
        res.status(200).json(event);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}