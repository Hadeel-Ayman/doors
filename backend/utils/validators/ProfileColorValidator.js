const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const Profile = require('../../models/ProfileModel')


exports.getProfileColorValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id3'),
    result
]

exports.createProfileColorValidator = [
    check('image'),
    check('title')
        .notEmpty()
        .withMessage('title is required'),
    result
]

exports.updateProfileColorValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id4'),
    result
]

exports.deleteProfileColorValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id5'),
    result
]