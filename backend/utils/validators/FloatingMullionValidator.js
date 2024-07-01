const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware');
const Frame = require('../../models/FrameModel');
const { default: mongoose } = require('mongoose');


exports.getFloatingMullionValidator = [
    check('id').isMongoId().withMessage('Invalid FloatingMullion Id'),
    result // for catch error from the above id 
]

exports.createFloatingMullionValidator = [
    check('name')
        .notEmpty()
        .withMessage('name is required'),
    check('code')
        .notEmpty()
        .withMessage('code is required'),
    check('Length_of_Beam')
        .isMongoId()
        .notEmpty()
        .withMessage('Length_of_Beam is required'),
    // check('colours')
    //     .isMongoId()
    //     .withMessage('Invalid colours id format'),
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


exports.updateFloatingMullionValidator = [
    check('id').isMongoId().withMessage('Invalid FloatingMullion id format'),
    result
];

exports.deleteFloatingMullionValidator = [
    check('id').isMongoId().withMessage('Invalid FloatingMullion id format'),
    result,
];