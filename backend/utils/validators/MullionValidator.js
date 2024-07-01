const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const Frame = require('../../models/FrameModel')
const { default: mongoose } = require('mongoose')

exports.getMullionValidator = [
    check('id').isMongoId().withMessage('Invalid Mullion Id'),
    result // for catch error from the above id 
]

exports.createMullionValidator = [
    check('name')
        .notEmpty()
        .withMessage('name is required'),
    check('code')
        .notEmpty()
        .withMessage('code is required'),
    check('Length_of_Beam')
        .notEmpty()
        .withMessage('Length_of_Beam is required'),
    check('Width')
        .isNumeric()
        .notEmpty()
        .withMessage('Width is required'),
    check('weightPermeter')
        .isNumeric()
        .notEmpty()
        .withMessage('weightPermeter is required'),
    check('pricePermeter')
        .isNumeric()
        .notEmpty()
        .withMessage('pricePermeter is required'),
    check('price_beam'),
    check('profile')
        .isMongoId()
        .withMessage('Invalid profile id format'),
    result
]


exports.updateMullionValidator = [
    check('id').isMongoId().withMessage('Invalid Mullion id format'),
    result
];

exports.deleteMullionValidator = [
    check('id').isMongoId().withMessage('Invalid Mullion id format'),
    result,
];