import { Request, Response } from "express";

class UserController {
    constructor() {

    }

    public index = (req:Request, res:Response, next:any) => {
        console.log('User Index Route Loaded Successfully');
        res.send("<h1>Hey! Meena</h1> <h3>Welcome to Nodejs typescript classes</h3>");
    };

    public show = (req:any, res:any, next:any) => {
        console.log('User show Route Loaded Successfully');
        res.send("<h1>Hey! Meena</h1><h3>This is your detail controller function</h3>");
    };

    public create = (req: Request, res: Response, next: any ) => {
        console.log('This is create method');
        res.send("Create data");
    };

    public update = (req:Request, res:Response, next:any) => {
        console.log('This is update method');
        res.send('Details updated successfully');
    }
}

export default new UserController();
