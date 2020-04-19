import {NextFunction, Request, Response} from "express";
import httpStatus from 'http-status-codes'

export const logErrors = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error.stack)
  next(error)
}

export const respondNoResourceFound = (req: Request, res: Response) => {
  const errorCode = httpStatus.NOT_FOUND
  res.status(errorCode)
  res.send(`${errorCode} | Page does not exist!`)
}

export const respondInternalError = (error: Error, req: Request, res: Response, next: NextFunction) => {
  const errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.error(error.stack)
  res.status(errorCode)
  res.send(`${errorCode} | application is experiencing problem` )
}