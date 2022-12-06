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
    const newMinion = addToDatabase('minions', req.body);
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
//Im coming back to this and will restart it next week -> What a crazy friday -> Might do something -> I actually will come back and code this project again after I take some time away (will be better for me with a bigger gap) -> get it -> that was close -> OAuth Time! -> Back end feature testing practice -> Primary program -> bought a car? -We got a car now -> Hello world -> getting into SQL finally -> Now here we go -> Loving this simple SQL with Postbird -> so SQL has been fun so far -> Thanksgiving -> Still working on SQL course -> lots of work on the coach app -> one day I'll code front end again -> Database relationships day -> Thailand prep and more SWL -> Jeddah today -> Dance concert and my birthday -> I need a vaca -> Feeling better now that I worked out one day -> Finishing SQL project


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