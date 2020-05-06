import express from 'express'
import  path from 'path'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes';
import usersRouter from './routes/users';
import * as errorController from './controllers/errorController'
import subscribersRouter from './routes/subscriber'
import mongoose from 'mongoose'

export const app = express();
mongoose.Promise = global.Promise

app.use(logger('dev'));
app.use(errorController.respondInternalError)
// app.use(errorController.respondNoResourceFound)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', indexRouter);
app.use('/users', usersRouter);
app.use('/subscribers', subscribersRouter)


