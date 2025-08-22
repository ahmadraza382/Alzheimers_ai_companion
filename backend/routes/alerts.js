const express = require('express');
const router = express.Router();
// ...alerts logic here
router.get('/', (req, res) => res.send('Get alerts'));
router.post('/', (req, res) => res.send('Add alert'));
module.exports = router;
