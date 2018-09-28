const configuration   = require ('../knexfile').development
const knex            = require ('knex')(configuration)
const user_definition = require ('../definitions/users')

module.exports = {
    Users: {
        getAllUsers: function() {
            return knex ('Users')
        },
        getUserById: function(id) {
            return knex ('Users').where("id", id)
        },
        postNewUser: function(Users) {
            return knex ('Users').insert(Users).returning('Users')
        }
    },
    Products: {
        getAllProducts: function() {
            return knex ('Products')
        },
        getProductById: function(id) {
            return knex ('Products').where("id", id)
        },
        postNewProduct: function(Products) {
            return knex ('Products').insert(Products).returning('Products')
        }
    },
    Orders: {
        getAllOrders: function() {
            return knex ('Orders')
            .leftJoin('Users', { 'Orders.user_id': 'Users.id' })
            .leftJoin('Products', { 'Orders.product_id': 'Products.id' })
            .select(
                'Orders.id',
                "Users.firstname as Who's Order",
                'Products.name as Name Order',
                'Products.price as Price'
            )
        },
        getOrderById: function(id) {
            return knex ('Orders').where("Orders.id", id)
            .leftJoin('Users', { 'Orders.user_id': 'Users.id' })
            .leftJoin('Products', { 'Orders.product_id': 'Products.id' })
            .select(
                'Orders.id',
                "Users.firstname as Who's Order",
                'Products.name as Name Order',
                'Products.price as Price'
            )
        },
        postNewOrder: function(Orders) {
            return knex ('Orders').insert(Orders).returning('Orders')
        }
    },
    Images: {
        getAllImages: function() {
            return knex ('Images')
        },
        getImagesById: function(id) {
            return knex ('Images').where('Images.id', id)
            .leftJoin('Products', { 'Images.product_id': 'Products.id' })
        },
        postNewImage: function(Images) {
            return knex ('Images').insert(Images).returning('Images')
        }
    }
}