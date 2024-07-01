const express = require('express');
const { PostLayout, GetAllLayout, getOneLayout, UpdateLayout, DeleteLayout } = require('../services/LayoutService');
const { } = require('../utils/validators/UserValidator');
const { createLayoutValidator, getLayoutValidator, updateLayoutValidator, deleteLayoutValidator } = require('../utils/validators/LayoutValidator');
const { upload } = require('../middlewares/firebase');
const router = express.Router()

router.route('/')
    .post(upload.single('image'), createLayoutValidator, PostLayout)
    .get(GetAllLayout)

router.route('/:id')
    .get(getLayoutValidator, getOneLayout)
    .put(upload.single('image'), updateLayoutValidator, UpdateLayout)
    .delete(deleteLayoutValidator, DeleteLayout)

module.exports = router