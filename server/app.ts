import express from 'express';
import http from 'http';
import ExpressConfig from './config/express'

import SqlDB from './conn/sqldb';

class App {
    app: express.Application;
    expressConfig: any;
    db: any;
    constructor() {
        this.app = express();
        this.db = new SqlDB();
        this.expressConfig = new ExpressConfig();
        this.expressConfig.setMiddleWares(this.app);
        console.log('App Constructor');

        process.on('unhandledRejection', (reason, p) => {
            console.log({ 'p': p, 'reason': reason });
        });

        process.on('uncaughtException', (err) => {
            console.log({ m: 'uncaughtException', err });
        });

        this.connect().then(this.startServer).then(() => {
            console.log('API: Express server listening on %d, in %s mode', 3010);
        });
    }

    private connect = async (): Promise<any> => {
        return Promise.all([
            this.db.sequelize.authenticate()
        ]).catch(err => console.log({ 'Error starting': err }));
    };

    private createNewServer = (express: any): any => {
        return http.createServer(express);
    };

    private startServer = () => {
        const server = this.createNewServer(this.app);
        server.listen(3010, () => {
            console.log('Hi Meena, server started ✔ on port: 3010')
        })
    }
}

new App();
