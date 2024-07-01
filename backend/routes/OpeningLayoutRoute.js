const express = require('express');
const { PostOpeningLayout, GetAllOpeningLayout, getOneOpeningLayout, UpdateOpeningLayout, DeleteOpeningLayout } = require('../services/OpeningLayoutService');
const { createOpeningLayoutValidator, getOpeningLayoutValidator, updateOpeningLayoutValidator, deleteOpeningLayoutValidator } = require('../utils/validators/OpeningLayoutValidator');
const { upload } = require('../middlewares/firebase');
const router = express.Router()

router.route('/')
    .post(upload.single('image'), createOpeningLayoutValidator, PostOpeningLayout)
    .get(GetAllOpeningLayout)

router.route('/:id')
    .get(getOpeningLayoutValidator, getOneOpeningLayout)
    .put(upload.single('image'), updateOpeningLayoutValidator, UpdateOpeningLayout)
    .delete(deleteOpeningLayoutValidator, DeleteOpeningLayout)

module.exports = router