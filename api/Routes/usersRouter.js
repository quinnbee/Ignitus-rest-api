import express from 'express';
const userRouter = express.Router();

import {
  register,
  getUserInfoFromToken,
  login
} from '../Controllers/userController.js';

userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.post('/userinfofromtoken', getUserInfoFromToken);

/* Disabled atm.
    router.get('/student/oauth/linkedin', Users.studentlinkedlogin);
    router.get(
      '/student/oauth/linkedin/callback',
      Users.studentlinkedlogincallback,
    );
*/

/* Disabled atm.
    router.get('/professor/oauth/linkedin', Users.professorlinkedlogin);
    router.get(
      '/professor/oauth/linkedin/callback',
      Users.professorlinkedlogincallback,
    );
*/

/* Disabled atm.
    router.get('/verify', Users.verify);
*/

/* Disabled atm.
  router.post('/forgotPassword', Users.forgotPassword);
  router.get('/reset', Users.resetPassword);
  router.put('/updatePasswordViaMail', Users.updatePassword);
*/

export default userRouter;
