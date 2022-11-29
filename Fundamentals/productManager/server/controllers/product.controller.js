const Product = require('../models/product.model');

module.exports.createProduct = (request, response) =>{
    Product.create(request.body)
        .then(newProduct => response.json(newProduct))
        .catch((err) => console.log(err));
}
