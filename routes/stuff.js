const express = require('express');
const router = express.Router();

const controller = require('../controller/stuffController')


router.get('/', controller.getEveryone)
router.get('/:region/:offset', controller.getRegion )
router.get('/:number', controller.getNumber)

module.exports = router;