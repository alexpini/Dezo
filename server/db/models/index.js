const User = require('./User')
const Product = require('./Product')

Product.belongsTo(User)
User.hasMany(Product)

module.exports = {
    Product, User
}