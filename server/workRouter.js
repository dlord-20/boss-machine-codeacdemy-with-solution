const express = require('express');
const workRouter = express.Router();

const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    createWork
} = require('./db')

workRouter.get('/', (req, res, next) => {
    const work = getAllFromDatabase('work');
    res.send(work);
});

workRouter.post('/', (req, res, next) => {
    // const newWork = createWork()

});

workRouter.put('/:workId', (req, res, next) => {

});

workRouter.delete('/:workId', (req, res, next) => {

});


module.exports = workRouter;