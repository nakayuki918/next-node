import {getAllSubscribers, saveSubscriber} from "../controllers/subscriberController";
import express, {Response, Request, NextFunction} from 'express'
const router = express.Router()

router.get('/', getAllSubscribers, (req, res, next) => {
  console.log(res.json)
})

router.post('/', saveSubscriber)

export default router



// curl -X POST -H "Content-Type: application/json" -d '{"name":"hogehoge", "email":"hoge@gmail.com", "zipCode": "2031703"}' http://localhost:3000/subscribers



