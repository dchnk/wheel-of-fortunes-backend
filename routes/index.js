const router = require('express').Router();
const userRouter = require('./users');
const jackpotRouter = require('./jackpot');
const winnerRouter = require('./winners');
const NotFoundError = require('../utils/Errors/NotFoundError');
const { validateUserBody } = require('../middlewares/validations');

router.use('/winners', winnerRouter)
router.use('/jackpot', jackpotRouter)
router.use('/users', validateUserBody, userRouter);
router.use('*', (req, res, next) => {
  const err = new NotFoundError('Страница не найдена');
  next(err);
});

module.exports = router;


