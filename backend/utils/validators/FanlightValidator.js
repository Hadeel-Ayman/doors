const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')

exports.getFanlightValidator = [
    check('id').isMongoId().withMessage('Invalid Fanlight Id'),
    result // for catch error from the above id 
]

exports.createFanlightValidator = [
    check('image'),
    check('title')
        .notEmpty()
        .withMessage('title is required'),
    // check('numOfSegment')
    //     .isNumeric()
    //     .withMessage('numOfSegment is required')
    //     .notEmpty()
    //     .withMessage('title is required'),
    check('layout')
        .isMongoId()
        .withMessage('invalid layout Id')
        .notEmpty()
        .withMessage('layout is required'),
    result
]

exports.updateFanlightValidator = [
    check('id').isMongoId().withMessage('Invalid Fanlight Id'),
    result
]

exports.deleteFanlightValidator = [
    check('id').isMongoId().withMessage('Invalid Fanlight Id'),
    result
]