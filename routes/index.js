const router = require('express').Router();
const userRouter = require('./users');
const NotFoundError = require('../utils/Errors/NotFoundError');
const { validateUserBody } = require('../middlewares/validations');

router.use('/users', validateUserBody, userRouter);
router.use('*', (req, res, next) => {
  const err = new NotFoundError('Страница не найдена');
  next(err);
});

module.exports = router;


