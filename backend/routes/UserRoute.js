const express = require('express');
const { PostUser, GetUsers, getOneUser, UpdateUser, DeleteUser, getAdminDetails, getAllAdmins, addNewAdmin } = require('../services/UserService');
const { getUserValidator, updateUserValidator, deleteUserValidator, createUserValidator } = require('../utils/validators/UserValidator');
const router = express.Router()
const { isSuperAdminAuthenticated } = require('../middlewares/auth');

router.route('/')
    .post(createUserValidator, PostUser)
    .get(GetUsers)

// get Admin Details    
router.route('/getAdminDetails').get(isSuperAdminAuthenticated, getAdminDetails)
router.route('/getAllAdmins').get(isSuperAdminAuthenticated, getAllAdmins)
router.route('/addNewAdmin').post(isSuperAdminAuthenticated, addNewAdmin)

router.route('/:id')
    .get(getUserValidator, getOneUser)
    .put(updateUserValidator, UpdateUser)
    .delete(deleteUserValidator, DeleteUser)

module.exports = router