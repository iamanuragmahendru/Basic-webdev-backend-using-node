const Sequelize = require('sequelize');
const db = new Sequelize('shopdb', 'shopper', 'shop', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        // acquire: 30000,
        // idle: 10000
    },

    // SQLite only
    //   storage: 'path/to/database.sqlite',

    //   // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    //   operatorsAliases: false
});

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

db.sync()
    .then(() => console.log('Database created'))
    .catch((err) => console.log('Error creating'))

exports = module.exports = {
    User,
    Product
}


// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });