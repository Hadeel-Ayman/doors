const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')

exports.getGlassColorValidator = [
    check('id').isMongoId().withMessage('Invalid TypeOfUnit Id'),
    result
]

exports.createGlassColorValidator = [
    check('image'),
    check('title')
        .notEmpty()
        .withMessage('type is required'),
    check('plus')
        .isNumeric()
        .notEmpty()
        .withMessage('plus is required'),
    result
]

exports.updateGlassColorValidator = [
    check('id').isMongoId().withMessage('Invalid TypeOfUnit Id'),
    result
]

exports.deleteGlassColorValidator = [
    check('id').isMongoId().withMessage('Invalid TypeOfUnit Id'),
    result
]