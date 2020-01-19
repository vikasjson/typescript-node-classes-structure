import { Sequelize, Options, DataTypes } from 'sequelize';
import _ from 'lodash';

import User from './../../api/user/user.model';
import Address from './../../api/address/address.model';

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

        const models = {
            User: User.init(sequelize, DataTypes),
            Address: Address.init(sequelize, DataTypes)
        };

        const db = {
            Sequelize,
            sequelize,
            ...models
        };

        return db;
    }
}

export default SqlDB;
