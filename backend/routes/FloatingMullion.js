const express = require('express');
const { PostFloatingMullion, GetAllFloatingMullion, getOneFloatingMullion, UpdateFloatingMullion, DeleteFloatingMullion } = require('../services/FloatingMullionService');
const { createFloatingMullionValidator, getFloatingMullionValidator, updateFloatingMullionValidator, deleteFloatingMullionValidator } = require('../utils/validators/FloatingMullionValidator');
const router = express.Router()


router.route('/')
    .post(createFloatingMullionValidator, PostFloatingMullion)
    .get(GetAllFloatingMullion)

router.route('/:id')
    .get(getFloatingMullionValidator, getOneFloatingMullion)
    .put(updateFloatingMullionValidator, UpdateFloatingMullion)
    .delete(deleteFloatingMullionValidator, DeleteFloatingMullion)

module.exports = router