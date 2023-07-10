const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const corsConfig = require('./config/corsConfig.json');

const models = require('./models/index');
const logger = require('./lib/logger');

dotenv.config();

const { NODE_ENV, PORT, LOGGER_LEVEL } = process.env;

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

logger.info('app start !!');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// sequelize 세팅
models.sequelize.sync().then(() => {
  logger.info('Sequelize sync success');
}).catch((err) => {
  logger.error('Sequelize sync error', err);
}).catch((err) => {
  logger.error('DB connection fail', err);
});

// app.use(logger('dev'));
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
