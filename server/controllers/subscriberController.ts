import { Subscriber } from "../models/subscriber";
import { Request, Response, NextFunction} from "express";

export async function getAllSubscribers(req: Request, res: Response, next: NextFunction) {
  try {
    await Subscriber.find({}).exec().then((subscribers) => {
      res.json(subscribers)
    })
    await next()
  } catch(e) {
    res.send(e)
  }
  // try {
  //   const results = await Subscriber.find({}).exec()
  //   return results
  // } catch (e) {
  //   next(e)
  //   return e
  // }
}

export async function saveSubscriber(req: Request, res:Response) {
  const {
    name,
    email,
    zipCode
  } = req.body

  const newSubscriber = new Subscriber({
    name,
    email,
    zipCode
  })

  try {
    await newSubscriber.save()
    await res.json(newSubscriber)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
}