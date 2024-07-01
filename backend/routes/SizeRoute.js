const express = require('express');
const { PostSize, GetAllSize, getOneSize, UpdateSize, DeleteSize } = require('../services/SizeService');
const { createSizeValidator, getSizeValidator, updateSizeValidator, deleteSizeValidator } = require('../utils/validators/SizeValidator');
const router = express.Router()

router.route('/')
    .post(createSizeValidator, PostSize)
    .get(GetAllSize)

router.route('/:id')
    .get(getSizeValidator, getOneSize)
    .put(updateSizeValidator, UpdateSize)
    .delete(deleteSizeValidator, DeleteSize)

module.exports = router