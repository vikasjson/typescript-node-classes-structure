class UserController {
    constructor() {

    }

    public index = (req:any, res:any, next:any) => {
        console.log('User Index Route Loaded Successfully');
        res.send("<h1>Hey! Meena</h1> <h3>Welcome to Nodejs typescript classes</h3>");
    };
    public show = (req:any, res:any, next:any) => {
        console.log('User show Route Loaded Successfully');
        res.send("<h1>Hey! Meena</h1><h3>This is your detail controller function</h3>");
    };
}

export default new UserController();
