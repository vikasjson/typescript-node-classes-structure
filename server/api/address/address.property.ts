class AddressProperty {
    constructor(DataTypes: any) {
        return {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true,
            },
            line1: DataTypes.STRING,
            line2: DataTypes.STRING,
            state: DataTypes.STRING,
            city: DataTypes.STRING,
            pincode: DataTypes.STRING,
        }
    }
}

export default AddressProperty;
