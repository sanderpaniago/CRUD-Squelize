const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const basename = path.basename(__filename);

const sequelize = new Sequelize('cadastro-orm', 'root', 'root', {
    dialect: 'mysql',
    host: '127.0.0.1'
})

const models = {}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        models[model.name] = model;
    });

    Object.keys(models).forEach(modelName => {
        if('associate' in models[modelName]) {
            models[modelName].associate(models)
        }
    })

module.exports = {
    sequelize,
    models
}



