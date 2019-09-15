// - Routers
import User from './api/user';

class Routes {
    user: any;
    constructor() {
        this.user = new User();
    }

    public index(app: any) {
        app.use('/api/users', this.user);
        app.route('/*').get((req: any, res: any) => res.status(404).json({ message: '404' }));
    }
}

export default Routes;
