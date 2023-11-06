const { Winner } = require('../models/winner');

module.exports.getWinners = (req, res, next) => {
  Winner.findAll()
    .then((winners) => {
      const sortedWinners = winners.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);

        return dateB - dateA;
      });
      return res.status(200).send(sortedWinners.slice(0, 4));
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports.createWinner = (req, res, next) => {
  const {
    winner_id, first_name, last_name, photo, win, jackpot
  } = req.body;

  Winner.create({
    winner_id, first_name, last_name, photo, win, jackpot
  })
    .then(() => {
      return Winner.findAll()
    })
    .then((winners) => {
      const sortedWinners = winners.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);

        return dateB - dateA;
      });
      return res.status(200).send(sortedWinners.slice(0, 4));
    })
    .catch((err) => {
      return next(err);
    });
};
