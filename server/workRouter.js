const express = require('express');
const workRouter = express.Router();

const {
    getFromDatabaseById,
    getAllFromDatabase,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('./db');

workRouter.param('minionId', (req, res, next, minionId) => {
    const minion = getFromDatabaseById('minions', minionId);

    if(minion) {
        req.minion = minion;
        req.minionId = minionId;
        next();
    } else {
        res.status(404).send();
    }
});

workRouter.param('workId', (req, res, next, workId) => {
    const work = getFromDatabaseById('work', workId);

    if(work) {
        req.work = work;
        req.workId = workId;
        next();
    } else {
        res.status(404).send();
    }
});

workRouter.get('/:minionId/work', (req, res, next) => {
    const allWork = getAllFromDatabase('work');
    const minionWork = allWork.filter(work => work.minionId === req.minionId);

    res.status(200).send(minionWork);
});

workRouter.post('/:minionId/work', (req, res, next) => {
    const newWork = addToDatabase('work', req.body);
    res.status(201).send(newWork);
});

workRouter.put('/:minionId/work/:workId', (req, res, next) => {
    
    if(req.workId !== req.minionId) {
        res.status(400).send();
    } else {
        const updatedWork = updateInstanceInDatabase('work', req.body);
        res.status(200).send(updatedWork);
    }
});

workRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('work', req.workId);
    if(deleted) {
        res.status(204).send(deleted);
    } else {
        res.status(500).send();
    }
});


module.exports = workRouter;