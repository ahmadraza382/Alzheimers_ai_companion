const express = require('express');
const router = express.Router();
// ...memories logic here
router.get('/', (req, res) => res.send('Get memories'));
router.post('/', (req, res) => res.send('Add memory'));
module.exports = router;
