const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')

exports.getCuttingProcessValidator = [
    check('id').isMongoId().withMessage('Invalid User Id'),
    result
]

exports.createCuttingProcessValidator = [
    check('thickenss')
        .isNumeric()
        .withMessage('thickenss must be a number'),
    check('Welding_time')
        .isNumeric()
        .withMessage('Welding_time must be a number'),
    check('profile')
        .isMongoId()
        .withMessage('Invalid User Id'),
    result
]

exports.updateCuttingProcessValidator = [
    check('id').isMongoId().withMessage('Invalid User Id'),
    result
]

exports.deleteCuttingProcessValidator = [
    check('id').isMongoId().withMessage('Invalid User Id'),
    result
]