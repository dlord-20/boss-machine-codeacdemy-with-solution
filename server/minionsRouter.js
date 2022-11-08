const express = require('express');
const minionsRouter = express();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase
} = require('./db');

minionsRouter.get('/', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    res.send(allMinions);
});

minionsRouter.post('/', (req, res, next) => {

});

minionsRouter.get('/:minionId', (req, res, next) => {

});

module.exports = minionsRouter;