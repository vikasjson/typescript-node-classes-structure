import { Model, ModelAttributes} from 'sequelize';

import UserProperty from './user.property';

class User extends Model {
    public static init(sequelize: any, DataTypes: any) {
        return super.init.call(this, <ModelAttributes>new UserProperty(DataTypes), {
            sequelize,
            tableName: 'users',
            timestamps: true,
            paranoid: true,
            underscored: true
        });
    }
}

export default User;
