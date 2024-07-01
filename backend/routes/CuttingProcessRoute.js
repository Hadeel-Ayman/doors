const express = require('express');
const { PostCuttingProcess, GetAllCuttingProcess, getOneCuttingProcess, UpdateCuttingProcess, DeleteCuttingProcess } = require('../services/CuttingProcessService');
const { createCuttingProcessValidator, getCuttingProcessValidator, deleteCuttingProcessValidator, updateCuttingProcessValidator } = require('../utils/validators/CuttingProcessValidator');
const router = express.Router()

router.route('/')
    .post(createCuttingProcessValidator, PostCuttingProcess)
    .get(GetAllCuttingProcess)

router.route('/:id')
    .get(getCuttingProcessValidator, getOneCuttingProcess)
    .put(updateCuttingProcessValidator, UpdateCuttingProcess)
    .delete(deleteCuttingProcessValidator, DeleteCuttingProcess)

module.exports = router