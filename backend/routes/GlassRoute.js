const express = require('express');
const { PostGlass, GetAllGlass, getOneGlass, UpdateGlass, DeleteGlass } = require('../services/GlassService');
const { createGlassValidator, getGlassValidator, updateGlassValidator, deleteGlassValidator } = require('../utils/validators/GlassValidator');
const router = express.Router()

router.route('/')
    .post(createGlassValidator, PostGlass)
    .get(GetAllGlass)

router.route('/:id')
    .get(getGlassValidator, getOneGlass)
    .put(updateGlassValidator, UpdateGlass)
    .delete(deleteGlassValidator, DeleteGlass)

module.exports = router