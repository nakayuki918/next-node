import * as homeController from '../controllers/homeController'
import express, {Response, Request, NextFunction} from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('200');
});

router.get('/:id', homeController.sendReqParams);

export default router
