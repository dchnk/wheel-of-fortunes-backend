const { User } = require('../models/user');
const BadRequestError = require('../utils/Errors/BadRequestError');

module.exports.getUserInfo = (req, res, next) => {
  const {
    id, first_name, last_name,
  } = req.body;
  
  User.findOne({ where: { id: id } })
    .then((user) => {
      if (!user) {
        return User.create({
          id, first_name, last_name,
        })
        .then((newUser) => {
          res.status(201).send(newUser)
        })
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError('Некорректный ID'));
      }
      return next(err);
    });
};

module.exports.patchUserInfo = (req, res, next)  => {
  const {
    id, balance,
  } = req.body;
  
  User.update({ balance: balance }, { where: { id: id } })
    .then( async () => {
      const currentUser =  await User.findOne({ where: { id: id } });
      return res.status(200).send(currentUser);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError('Некорректный ID'));
      }
      return next(err);
    });
};
