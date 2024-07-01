const express = require('express');
const { PostGlazingBead, GetAllGlazingBead, getOneGlazingBead, UpdateGlazingBead, DeleteGlazingBead } = require('../services/GlazingBeadService');
const { createGlazingBeadValidator, getGlazingBeadValidator, updateGlazingBeadValidator, deleteGlazingBeadValidator } = require('../utils/validators/GlazingBeadValidator');
const router = express.Router()

router.route('/')
    .post(createGlazingBeadValidator, PostGlazingBead)
    .get(GetAllGlazingBead)

router.route('/:id')
    .get(getGlazingBeadValidator, getOneGlazingBead)
    .put(updateGlazingBeadValidator, UpdateGlazingBead)
    .delete(deleteGlazingBeadValidator, DeleteGlazingBead)

module.exports = router