require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { sequelize } = require('./database/database');
const router = require('./routes/index');
const { errorsFisher } = require('./middlewares/errorsFisher');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 5000 } = process.env;
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

try {
  sequelize.authenticate()
  console.log('DATABASE IS CONNECTED')
} catch (e) {
  console.log('DATABASE CONNECTION ERROR: ', e)
}

app.use(cors({
  origin: ['http://localhost:3000', 'https://localhost:3000'],
}));

app.use(requestLogger);

app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorsFisher);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
