const { Jackpot } = require('../models/jackpot');

module.exports.getJackpot = (req, res, next) => {

  Jackpot.findOrCreate({ where: {jackpot_id: 1} })
    .then((jackpot) => {
      return res.status(200).send(jackpot);
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports.increaseJackpot = (req, res, next) => {

  Jackpot.increment({ current_jackpot: 300 }, { where: {jackpot_id: 1} })
    .then( async () => {
      const currentJackpot =  await Jackpot.findOne({ where: { jackpot_id: 1 } });
      return res.status(200).send(currentJackpot);
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports.winJackpot = (req, res, next) => {
  Jackpot.findOne({ where: { jackpot_id: 1 } })
    .then((jackpot) => {
      const currentWin = jackpot;
      Jackpot.update({ current_jackpot: 1000 }, { where: { jackpot_id: 1 } })
        .then(() => {
          Jackpot.findOne({ where: { jackpot_id: 1 } })
            .then((jackpot) => {
              return res.status(200).send({currentWin, jackpot});
            })
        })
    })  
    .catch((err) => {
      return next(err);
    });
};
