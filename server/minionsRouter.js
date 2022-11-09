const express = require('express');
const minionsRouter = express.Router();

const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('./db');

minionsRouter.get('/', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    res.send(allMinions);
});

minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', res.body);
    res.status(201).send(newMinion);
});

minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);

    if(minion) {
        req.minion = minion;
        req.id = id;
        next();
    } else {
        res.status(404).send();
    }

});

minionsRouter.get('/:minionId', (req, res, next) => {
    res.status(200).send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.status(200).send(updatedMinion);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('minions', req.id);
    if(deleted) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});

module.exports = minionsRouter;