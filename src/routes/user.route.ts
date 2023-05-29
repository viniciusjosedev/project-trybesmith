import { Router } from 'express';
import userController from '../controllers/user.controller';
import userValidation from '../middlewares/user.validation';

const userRoute = Router();

userRoute.post('/login', userValidation.userLoginValidate, userController.login);

export default userRoute;
