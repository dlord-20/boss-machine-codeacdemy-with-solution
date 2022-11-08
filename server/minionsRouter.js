const express = require('express');
const minionsRouter = express.Router();

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
    console.log(allMinions);
    res.send(allMinions);
});

minionsRouter.post('/', (req, res, next) => {

});

minionsRouter.get('/:minionId', (req, res, next) => {

});

minionsRouter.put('/:minionId', (req, res, next) => {

});

minionsRouter.delete('/:minionId', (req, res, next) => {

});

module.exports = minionsRouter;