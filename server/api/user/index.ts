import express from 'express';
import controller from './user.controller';

class User {
    router:any;
    constructor () {
        this.router = express.Router();
        this.router.get('/', controller.index);
        this.router.get('/:id', controller.show);
        return this.router;
    }
}

export default User;
