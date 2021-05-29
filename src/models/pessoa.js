const PessoaModel = (sequelize, DataType) => {
    const Pessoa = sequelize.define('Pessoa', {
        nome: DataType.STRING,
        cargo: DataType.STRING,
        nascimento: DataType.DATE
    })

    Pessoa.associate = ({Usuario}) => {
        Pessoa.hasOne(Usuario)
    }

    return Pessoa
}

module.exports = PessoaModel