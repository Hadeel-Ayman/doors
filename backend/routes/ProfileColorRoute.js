const express = require('express');
const { PostProfileColor, GetAllProfileColor, getOneProfileColor, UpdateProfileColor, DeleteProfileColor } = require('../services/ProfileColorService');
const { createProfileColorValidator, getProfileColorValidator, updateProfileColorValidator, deleteProfileColorValidator } = require('../utils/validators/ProfileColorValidator');
const { upload } = require('../middlewares/firebase');
const router = express.Router()

router.route('/')
    .post(upload.single('image'), createProfileColorValidator, PostProfileColor)
    .get( GetAllProfileColor)

router.route('/:id')
    .get(getProfileColorValidator, getOneProfileColor)
    .put(upload.single('image'), updateProfileColorValidator, UpdateProfileColor)
    .delete(deleteProfileColorValidator, DeleteProfileColor)

module.exports = router