const ProjetoModel = (sequelize, DataType) => {
    const Projeto = sequelize.define('Projeto', {
        nome: DataType.STRING,
        cargo: DataType.STRING
    })

    return Projeto
}

module.exports = ProjetoModel