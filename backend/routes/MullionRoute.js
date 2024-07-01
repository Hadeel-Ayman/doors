const express = require('express');
const { PostMullion, GetAllMullion, getOneMullion, UpdateMullion, DeleteMullion } = require('../services/MullionService');
const { createMullionValidator, getMullionValidator, updateMullionValidator, deleteMullionValidator } = require('../utils/validators/MullionValidator');
const router = express.Router()

router.route('/')
    .post(createMullionValidator, PostMullion)
    .get(GetAllMullion)

router.route('/:id')
    .get(getMullionValidator, getOneMullion)
    .put(updateMullionValidator, UpdateMullion)
    .delete(deleteMullionValidator, DeleteMullion)

module.exports = router