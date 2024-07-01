const express = require('express');
const router = express.Router()
const { PostFrame, getOneFrame, GetAllFrames, UpdateFrame, DeleteFrame } = require('../services/FrameService');
const { createFrameValidator, getFrameValidator, updateFrameValidator, deleteFrameValidator } = require('../utils/validators/FrameValidator');
const { upload } = require('../middlewares/firebase');

router.route('/')
    .post(upload.single('image'), createFrameValidator, PostFrame)
    .get(GetAllFrames)

router.route('/:id')
    .get(getFrameValidator, getOneFrame)
    .put(upload.single('image'), updateFrameValidator, UpdateFrame)
    .delete(deleteFrameValidator, DeleteFrame)

module.exports = router