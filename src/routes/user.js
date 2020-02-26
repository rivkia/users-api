import { Router } from 'express';
import userController from '../controller/user';

const router = Router();

router.get('/', (req, res) => {

  userController.getUsers((statusCode, result) => {
    // I could work with the resulting HTML/JSON here. I could also just return it
    console.log(`onResult: (${statusCode})\n\n${JSON.stringify(result)}`);

    res.statusCode = statusCode;

    res.send(result);
  });
});

router.get('/:userId', (req, res) => {
  console.log(req.params.userId);
  return res.send(req.context.models.users[req.params.userId]);
});

export default router;
