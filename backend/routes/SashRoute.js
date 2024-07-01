const express = require('express');
const { PostSash, GetAllSash, getOneSash, UpdateSash, DeleteSash } = require('../services/SashService');
const { getSashValidator, createSashValidator, updateSashValidator, deleteSashValidator } = require('../utils/validators/SashValidator');
const { upload } = require('../middlewares/firebase');
const router = express.Router()

router.route('/')
    .post(upload.single('image'), createSashValidator, PostSash)
    .get(GetAllSash)

router.route('/:id')
    .get(getSashValidator, getOneSash)
    .put(upload.single('image'), updateSashValidator, UpdateSash)
    .delete(deleteSashValidator, DeleteSash)

module.exports = router