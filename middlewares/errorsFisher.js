module.exports.errorsFisher = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  if (err.name === "SequelizeUniqueConstraintError") {
    res.status(409).send({
      message: 'Данные не уникальны',
    });
  } else {
    res.status(statusCode).send({    
      message: statusCode === 500 ? 'На сервере произошла ошибка': message,
    });
  }
  
  next();
};
