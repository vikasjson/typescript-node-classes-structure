// - Routers
import User from './api/user';
import Address from "./api/address";

class Routes {
    user: any;
    address: any;
    constructor() {
        this.user = new User();
        this.address = new Address();
    }

    public index(app: any) {
        app.use('/api/users', this.user);
        app.use('/api/addresses', this.address);
        app.route('/*').get((req: any, res: any) => res.status(404).json({ message: '404' }));
    }
}

export default Routes;
