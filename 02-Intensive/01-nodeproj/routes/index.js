const express = require('express');
const logger = require('../lib/logger');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/logs', (req, res, next) => {
  logger.error('This message is error');
  logger.warn('This message is warn');
  logger.info('This message is info');
  logger.info('This message is 조승민');
  logger.info('This message is 조승민2');
  logger.info('This message is info');
  logger.verbose('This message is verbose');
  logger.debug('This message is debug');
  logger.silly('This message is silly');

  res.send('log insert!');
});

router.get('/today', (req, res, next) => {
  logger.info(new Date());

  res.send('log insert!');
});
module.exports = router;
