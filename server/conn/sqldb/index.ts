import { Sequelize, Options, DataTypes } from 'sequelize';

import User from './../../api/user/user.model';

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

        const sequelize: any = new Sequelize('mysql://root:Easy%402020@127.0.0.1/test_typescript', sqlDefaults);
        const db = {
            Sequelize,
            sequelize,
            models: {
                User: User.init(sequelize, DataTypes)
            }
        };

        return db;
    }
}

export default SqlDB;
