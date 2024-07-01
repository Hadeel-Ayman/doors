const { check, body } = require('express-validator');
const { Types } = require('mongoose');
const result = require('../../middlewares/validatorMeddliware');
const slugify = require('slugify');

// Custom validator for MongoDB ObjectId
const isValidObjectId = (id) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new Error('Invalid Frame ID');
    }
    return true;
};

// Validator for getting a frame by ID
exports.getFrameValidator = [
    check('id').custom(isValidObjectId),
    result // Middleware to handle validation results
];

// Validator for creating a new frame
exports.createFrameValidator = [
    check('name')
        .notEmpty()
        .withMessage('name is required')
        .isLength({ min: 3 })
        .withMessage('Too short')
        .isLength({ max: 20 })
        .withMessage('Too long')
        .custom((val, { req }) => {
            req.body.slug = slugify(val);
            return true;
        }),
    check('code')
        .notEmpty()
        .withMessage('code is required'),
    check('Length_of_Beam')
        .notEmpty()
        .withMessage('Length_of_Beam is required')
        .isNumeric()
        .withMessage('Length_of_Beam must be a number'),
    check('Renovation')
        .notEmpty()
        .withMessage('Renovation is required')
        .isBoolean()
        .withMessage('Renovation must be a boolean value'),
    check('Renovation_height')
        .notEmpty()
        .withMessage('Renovation_height is required')
        .isNumeric()
        .withMessage('Renovation_height must be a number'),
    check('Frame_Height')
        .notEmpty()
        .withMessage('Frame_Height is required')
        .isNumeric()
        .withMessage('Frame_Height must be a number'),
    check('Frame_Width')
        .notEmpty()
        .withMessage('Frame_Width is required')
        .isNumeric()
        .withMessage('Frame_Width must be a number'),
    check('weightPermeter')
        .notEmpty()
        .withMessage('weightPermeter is required')
        .isNumeric()
        .withMessage('weightPermeter must be a number'),
    check('pricePermeter')
        .notEmpty()
        .withMessage('pricePermeter is required')
        .isNumeric()
        .withMessage('pricePermeter must be a number'),
    check('pricePerbeam')
        .optional()
        .isNumeric()
        .withMessage('pricePerbeam must be a number'),
    check('image')
        .optional(), // Optional image URL
    check('from')
        .notEmpty()
        .withMessage('from is required')
        .isNumeric()
        .withMessage('from must be a number'),
    result
];

// Validator for updating a frame
exports.updateFrameValidator = [
    check('id').custom(isValidObjectId),
    body('name').optional().custom((val, { req }) => {
        if (val) {
            req.body.slug = slugify(val);
        }
        return true;
    }),
    body('code')
        .optional()
        .notEmpty()
        .withMessage('code is required'),
    body('Length_of_Beam')
        .optional()
        .isNumeric()
        .withMessage('Length_of_Beam must be a number'),
    body('Renovation')
        .optional()
        .isBoolean()
        .withMessage('Renovation must be a boolean value'),
    body('Renovation_height')
        .optional()
        .isNumeric()
        .withMessage('Renovation_height must be a number'),
    body('Frame_Height')
        .optional()
        .isNumeric()
        .withMessage('Frame_Height must be a number'),
    body('Frame_Width')
        .optional()
        .isNumeric()
        .withMessage('Frame_Width must be a number'),
    body('weightPermeter')
        .optional()
        .isNumeric()
        .withMessage('weightPermeter must be a number'),
    body('pricePermeter')
        .optional()
        .isNumeric()
        .withMessage('pricePermeter must be a number'),
    body('pricePerbeam')
        .optional()
        .isNumeric()
        .withMessage('pricePerbeam must be a number'),
    body('image')
        .optional(), // Optional image URL
    body('from')
        .optional()
        .isNumeric()
        .withMessage('from must be a number'),
    result
];

// Validator for deleting a frame by ID
exports.deleteFrameValidator = [
    check('id').custom(isValidObjectId),
    result
];
