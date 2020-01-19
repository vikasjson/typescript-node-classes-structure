import { Model, ModelAttributes} from 'sequelize';

import AddressProperty from './address.property';

class Address extends Model {
    public static init(sequelize: any, DataTypes: any) {
        return super.init.call(this, <ModelAttributes>new AddressProperty(DataTypes), {
            sequelize,
            tableName: 'addresses',
            timestamps: true,
            paranoid: true,
            underscored: true
        });
    }
}

export default Address;
