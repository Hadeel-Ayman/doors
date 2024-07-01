const express = require('express');
const { PostFanlight, GetAllFanlight, getOneFanlight, UpdateFanlight, DeleteFanlight } = require('../services/FanlightService');
const { getFanlightValidator, createFanlightValidator, updateFanlightValidator, deleteFanlightValidator } = require('../utils/validators/FanlightValidator');
const { upload } = require('../middlewares/firebase');
const router = express.Router()

router.route('/')
    .post(upload.single('image'), createFanlightValidator, PostFanlight)
    .get(GetAllFanlight)

router.route('/:id')
    .get(getFanlightValidator, getOneFanlight)
    .put(upload.single('image'), updateFanlightValidator, UpdateFanlight)
    .delete(deleteFanlightValidator, DeleteFanlight)

module.exports = router