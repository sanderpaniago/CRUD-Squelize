const UserModel = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        nome: DataType.STRING,
        cargo: DataType.STRING,
        nascimento: DataType.DATE
    })

    return Usuario
}

module.exports = UserModel