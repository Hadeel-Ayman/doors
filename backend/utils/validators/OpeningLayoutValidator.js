const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')

exports.getOpeningLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid OpeningLayout Id'),
    result
]

exports.createOpeningLayoutValidator = [
    check('image'),
    check('title')
        .isString()
        .withMessage('title must be a string'),
    check('fanlight')
        .isMongoId()
        .withMessage('Invalid fanlight Id'),
    check('layout')
        .isMongoId()
        .withMessage('Invalid layout Id2'),
    result
]

exports.updateOpeningLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid OpeningLayout Id'),
    result
]

exports.deleteOpeningLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid OpeningLayout Id'),
    result
]
