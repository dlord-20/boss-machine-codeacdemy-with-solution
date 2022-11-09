const express = require('express');
const meetingsRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    deleteAllFromDatabase
} = require('./db');

meetingsRouter.use('/', (req, res, next) => {
    const allMeetings = getAllFromDatabase('meetings');
    req.meetings = allMeetings;
    next();
})

meetingsRouter.get('/', (req, res, next) => {
    res.status(200).send(req.meetings);
});

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    req.meetings.push(newMeeting);
    res.status(201).send(newMeeting);

});

meetingsRouter.delete('/', (req, res, next) => {
    const deleted = deleteAllFromDatabase('meetings');
    if(deleted) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
    
});

module.exports = meetingsRouter;