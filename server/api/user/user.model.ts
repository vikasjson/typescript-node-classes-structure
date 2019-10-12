import Sequelize from 'sequelize';

import UserProperty from './user.property';

const Model = Sequelize.Model;

class User extends Model {
    public static init(sequelize) {
        return super.init(new UserProperty(sequelize), {
            sequelize: sequelize,
            tableName: 'users',
            timestamps: true,
            paranoid: true,
            underscored: true
        });
    }
}

export default User;
