class UserProperty {
    constructor(DataTypes: any) {
        return {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true,
            },
            name: DataTypes.STRING,
        }
    }
}

export default UserProperty;
