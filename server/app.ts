import express from 'express';
import http from 'http';
import ExpressConfig from './config/express'

class App {
    app: express.Application;
    expressConfig: any;
    constructor() {
        this.app = express();
        this.expressConfig = new ExpressConfig();
        this.expressConfig.setMiddleWares(this.app);
        console.log('App Constructor');
        this.startServer();
    }

    private createNewServer = (express: any): any => {
        return http.createServer(express);
    };

    private startServer = () => {
        const server = this.createNewServer(this.app);
        server.listen(3008, () => {
            console.log('Hi Meena, server started on port: 3008')
        })
    }
}

new App();
