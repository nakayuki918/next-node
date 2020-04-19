import * as homeController from '../controllers/homeController'
import express, {Response, Request, NextFunction} from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('200');
});

router.get('/:id', homeController.sendReqParams);

router.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  console.log(req.query)
  res.send('200')
})

export default router
