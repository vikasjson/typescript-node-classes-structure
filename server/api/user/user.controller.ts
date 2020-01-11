import { Request, Response } from "express";

import SqlDB from "./../../conn/sqldb";

class UserController {
    db : any;
    constructor() {
        this.db = new SqlDB();
    }

    public index = async (req:Request, res:Response, next:any) => {
        const { User } = this.db.models;
        const users = await User.findAll();
        console.log('Users', users);
        console.log('User Index Route Loaded Successfully');
        return res.json(users);
    };

    public show = async (req:any, res:any, next:any) => {
        const { User } = this.db.models;
        const userId = req.params.id;
        const user = await User.findByPk(userId);
        console.log('User show Route Loaded Successfully');
        return res.json(user);
    };

    public create = async (req: Request, res: Response, next: any ) => {
        console.log('This is create method');
        res.send("Create data");
    };

    public update = (req:Request, res:Response, next:any) => {
        console.log('This is update method');
        res.send('Details updated successfully');
    }
}

export default new UserController();
