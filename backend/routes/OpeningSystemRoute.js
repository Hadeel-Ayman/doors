const express = require('express');
const { PostOpeningSystem, GetAllOpeningSystem, getOneOpeningSystem, UpdateOpeningSystem, DeleteOpeningSystem } = require('../services/OpeningSystemService');
const { getOpeningSystemValidator, updateOpeningSystemValidator, deleteOpeningSystemValidator, createOpeningSystemValidator } = require('../utils/validators/OpeningSystemValidator');
const { upload } = require('../middlewares/firebase');
const router = express.Router()

router.route('/')
    .post(upload.single('image'), PostOpeningSystem)
    .get(GetAllOpeningSystem)

router.route('/:id')
    .get(getOneOpeningSystem)
    .put(upload.single('image'), updateOpeningSystemValidator, UpdateOpeningSystem)
    .delete(deleteOpeningSystemValidator, DeleteOpeningSystem)

module.exports = router
