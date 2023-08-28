const urlController = require('../controller/url');

const router = require('express').Router();

router.post('/url', urlController.urlsetter);
router.get('/:shortId', urlController.urlgetter);
router.get('/url/analitics/:shortId', urlController.analiticsgetter);


module.exports = router;