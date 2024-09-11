const router = require('express').Router();


const notesRouter = require('./notesRoutes');

router.use('/notes', notesRouter);

module.exports = router;