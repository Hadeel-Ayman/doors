const express = require('express');
const router = express.Router();
const { PostMaterial, getOneMaterial, GetAllMaterials, UpdateMaterial, DeleteMaterial } = require('../services/MaterialService');
const { createMaterialValidator, getMaterialValidator, updateMaterialValidator, deleteMaterialValidator } = require('../utils/validators/MaterialValidator');
const { upload } = require('../middlewares/firebase');

router.route('/')
    .post(upload.single('image'), createMaterialValidator, PostMaterial)
    .get(GetAllMaterials)

router.route('/:id')
    .get(getMaterialValidator, getOneMaterial)
    .put(upload.single('image'), updateMaterialValidator, UpdateMaterial)
    .delete(deleteMaterialValidator, DeleteMaterial)

module.exports = router