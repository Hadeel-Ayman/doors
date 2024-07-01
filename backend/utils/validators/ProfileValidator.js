const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const Profile = require('../../models/ProfileModel')


exports.getProfileValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id6'),
    result
]

exports.createProfileValidator = [
    check('brandname')
        .isString()
        .notEmpty()
        .withMessage('brandname is required')
        .custom(async (value) => {
            const profile = await Profile.findOne({ brandname: value });
            if (profile) {
                throw new Error('brandname already in use');
            }
            return true;
        })
        ,
    check('company')
        .isMongoId()
        .withMessage('Invalid ID format'),
    check('system')
        .isMongoId()
        .withMessage('Invalid ID format'),
    check('material')
        .isMongoId()
        .withMessage('Invalid ID format')
    ,
    result
]

exports.updateProfileValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id7'),
    result
]

exports.deleteProfileValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id8'),
    result
]