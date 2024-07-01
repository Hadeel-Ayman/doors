const express = require('express');
const { PostGlassColor, GetAllGlassColor, getOneGlassColor, UpdateGlassColor, DeleteGlassColor } = require('../services/GlassColorService');
const { createGlassColorValidator, getGlassColorValidator, updateGlassColorValidator, deleteGlassColorValidator } = require('../utils/validators/GlassColorValidator');
const router = express.Router()
const { upload } = require('../middlewares/firebase');


router.route('/')
    .post(upload.single('image'), createGlassColorValidator, PostGlassColor)
    .get(GetAllGlassColor)

router.route('/:id')
    .get(getGlassColorValidator, getOneGlassColor)
    .put(upload.single('image'), updateGlassColorValidator, UpdateGlassColor)
    .delete(deleteGlassColorValidator, DeleteGlassColor)

module.exports = router