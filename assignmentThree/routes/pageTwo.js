const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/page-two', (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'secondPage.html'));
});

module.exports = router;
