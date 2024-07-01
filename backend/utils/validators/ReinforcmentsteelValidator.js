const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware');
const Frame = require('../../models/FrameModel');
const { default: mongoose } = require('mongoose');


exports.getReinforcementsteelValidator = [
    check('id').isMongoId().withMessage('Invalid Reinforcementsteel Id'),
    result // for catch error from the above id 
]

exports.createReinforcementsteelValidator = [
    check('name')
        .notEmpty()
        .withMessage('name is required'),
    check('code')
        .notEmpty()
        .withMessage('code is required'),
    check('thickness')
        .isNumeric()
        .notEmpty()
        .withMessage('thickness is required'),
    check('weightPermeter')
        .isNumeric()
        .notEmpty()
        .withMessage('weightPermeter is required'),
    check('pricePermeter')
        .isNumeric()
        .notEmpty()
        .withMessage('pricePermeter is required'),
    check('price_beam'),
    check('sash')
        .isMongoId()
        .withMessage('Invalid sash id format'),
    check('frame')
        .isMongoId()
        .withMessage('Invalid frame id format'),
    check('floatingMullion')
        .isMongoId()
        .withMessage('Invalid floatingMullion id format'),
    check('mullion')
        .isMongoId()
        .withMessage('Invalid mullion id format'),
    result
]


exports.updateReinforcementsteelValidator = [
    check('id').isMongoId().withMessage('Invalid Reinforcementsteel id format'),
    result
];

exports.deleteReinforcementsteelValidator = [
    check('id').isMongoId().withMessage('Invalid Reinforcementsteel id format'),
    result,
];