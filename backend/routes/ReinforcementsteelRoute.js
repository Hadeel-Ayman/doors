const express = require('express');
const { PostReinforcementsteel, GetAllReinforcementsteel, getOneReinforcementsteel, UpdateReinforcementsteel, DeleteReinforcementsteel } = require('../services/ReinforcementsteelService');
const { createReinforcementsteelValidator, getReinforcementsteelValidator, updateReinforcementsteelValidator, deleteReinforcementsteelValidator } = require('../utils/validators/ReinforcmentsteelValidator');
const router = express.Router()

router.route('/')
    .post(createReinforcementsteelValidator, PostReinforcementsteel)
    .get(GetAllReinforcementsteel)

router.route('/:id')
    .get(getReinforcementsteelValidator, getOneReinforcementsteel)
    .put(updateReinforcementsteelValidator, UpdateReinforcementsteel)
    .delete(deleteReinforcementsteelValidator, DeleteReinforcementsteel)

module.exports = router