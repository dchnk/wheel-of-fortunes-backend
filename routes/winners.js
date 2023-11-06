const router = require('express').Router();

const {
  getWinners,
  createWinner
} = require('../controllers/winners');

router.get('/', getWinners);
router.post('/', createWinner);

module.exports = router;