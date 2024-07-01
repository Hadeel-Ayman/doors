const { check, body } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')

exports.getLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid Layout Id'),
    result
]

exports.createLayoutValidator = [
    check('image'),
    check('title')
        .isString()
        .withMessage('title must be a string'),
    check('openingSystem')
        .notEmpty()
        .withMessage('openingSystem is required')
        .isMongoId()
        .withMessage('Invalid openingSystem id'),
    result
]

exports.updateLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid Layout Id'),
    result
]

exports.deleteLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid Layout Id'),
    result
]
