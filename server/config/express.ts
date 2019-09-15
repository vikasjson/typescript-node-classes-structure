import morgan from 'morgan';

import Routes from '../routes';

class Express {
    routes: any;
    constructor() {
        this.routes = new Routes();
    }

    public setMiddleWares = (app:any) => {
        app.use(morgan('dev'));
        this.routes.index(app);
    }
}

export default Express;


