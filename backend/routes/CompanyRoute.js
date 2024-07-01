const express = require('express');
const { PostCompany, GetAllCompany, getOneCompany, UpdateCompany, DeleteCompany } = require('../services/CompanyService');
const { createCompanyValidator, getCompanyValidator, deleteCompanyValidator, updateCompanyValidator } = require('../utils/validators/CompanyValidator');
const { upload } = require('../middlewares/firebase');
const router = express.Router()


router.route('/')
    .post(upload.single('image'), PostCompany)
    .get(GetAllCompany)

router.route('/:id')
    .get(getCompanyValidator, getOneCompany)
    .put(upload.single('image'), UpdateCompany)
    .delete(deleteCompanyValidator, DeleteCompany)

module.exports = router