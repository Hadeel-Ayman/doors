const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')

exports.getTypeOfUnitValidator = [
    check('id').isMongoId().withMessage('Invalid TypeOfUnit Id'),
    result
]

exports.createTypeOfUnitValidator = [
    check('type')
        .notEmpty()
        .withMessage('type is required1'),
    result
]

exports.updateTypeOfUnitValidator = [
    check('id').isMongoId().withMessage('Invalid TypeOfUnit Id'),
    result
]

exports.deleteTypeOfUnitValidator = [
    check('id').isMongoId().withMessage('Invalid TypeOfUnit Id'),
    result
]