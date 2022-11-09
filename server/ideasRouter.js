const express = require('express');
const ideasRouter = express.Router();
const checkMillionDallarIdea = require('./checkMillionDollarIdea');
const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('./db');



ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if(idea) {
        req.id = id;
        req.idea = idea;
        next();
    } else {
        res.status(404).send();
    }
});

ideasRouter.get('/', (req, res, next) => {
    const ideas = getAllFromDatabase('ideas');
    res.send(ideas);
});

ideasRouter.post('/', checkMillionDallarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.status(200).send(req.idea);
});

ideasRouter.put('/:ideaId', (req, res, next) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.status(200).send(updatedIdea);
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('ideas', req.id);
    if(deleted) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});

module.exports = ideasRouter;