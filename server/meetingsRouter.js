const express = require('express');
const meetingsRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    deleteAllFromDatabase
} = require('./db');

meetingsRouter.get('/', (req, res, next) => {
    const meetings = getAllFromDatabase('meetings');
    res.send(meetings);
});

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    req.allMeetings.push(newMeeting);
    res.status(201).send(newMeeting);

});

meetingsRouter.delete('/', (req, res, next) => {
    const deleted = deleteAllFromDatabase();
    if(deleted) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
    
});

module.exports = meetingsRouter;