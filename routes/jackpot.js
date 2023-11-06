const router = require('express').Router();

const {
  getJackpot,
  increaseJackpot,
  winJackpot
} = require('../controllers/jackpot');

router.get('/', getJackpot);
router.patch('/increase', increaseJackpot);
router.get('/win', winJackpot);

module.exports = router;