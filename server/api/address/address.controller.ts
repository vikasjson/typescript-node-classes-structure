import { Request, Response } from "express";

import SqlDB from "./../../conn/sqldb";

class AddressController {
    db : any;
    constructor() {
        this.db = new SqlDB();
    }

    public index = async (req:Request, res:Response, next:any) => {
        const { Address } = this.db.models;
        const addresses = await Address.findAll();
        console.log('addresses', addresses);
        console.log('addresses Index Route Loaded Successfully');
        return res.json(addresses);
    };

    public show = async (req:any, res:any, next:any) => {
        const { Address } = this.db.models;
        const addressId = req.params.id;
        const address = await Address.findByPk(addressId);
        console.log('User show Route Loaded Successfully');
        return res.json(address);
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

export default new AddressController();
