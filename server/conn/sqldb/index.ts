import { Sequelize, Options } from 'sequelize';
import _ from 'lodash';
import User from "../../api/user";
import path from 'path';
import fs from 'fs';

class SqlDB {
    constructor() {
        const sqlDefaults: Options = {
            dialect: 'mysql',
            timezone: '+05:30',
            dialectOptions: {
                decimalNumbers: true,
            },
            define: {
                charset: 'utf8',
                // dialectOptions: {
                //   collate: 'utf8_general_ci',
                // },
            },
        };

        const sequelize: any = new Sequelize('mysql://vikas:Easy%402020@127.0.0.1/test_typescript', sqlDefaults);
        const db = {
            Sequelize,
            sequelize,
        };

        // [
        //
        //     'User'
        //
        // ].forEach((model) => {
        //     // @ts-ignore
        //     console.log('db[model]', db[model]);
        //     // @ts-ignore
        //     db[model] = db.sequelize.import(`../../api/${_.camelCase(model)}/${_.camelCase(model)}.model`);
        // });


        // Object.keys(db).forEach((modelName) => {
        //     // @ts-ignore
        //     if ('associate' in db[modelName]) db[modelName].associate(db);
        // });


        // const modelsDirectory = path.dirname(__dirname) + '/models/';
        const modelsDirectory = path.dirname(__dirname) + '/api/';

        console.log('modelDorectory', modelsDirectory);

        // iterate over models directory and initialize each of them
        const models = Object.assign({}, ...fs.readdirSync(modelsDirectory)
            .map(function(file: any){
                const model = require(path.join(modelsDirectory + file)).default;
                console.log('model', model);
                return {
                    [model.name]: model.init(sequelize)
                };
,            })
        );

        return db;
    }
}

export default SqlDB;
