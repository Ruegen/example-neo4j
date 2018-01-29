const router = require('express').Router()
const Product = require('./productsModel')

router.get('/products', (req, res) => {
    Product.find()
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        console.log(newProduct)
        res.json({error: err.message})
    })
})

router.post('/products', (req, res)=> {
    const {name} = req.body

    const product = new Product(name)

    product.save()
    .then(newProduct => {
        res.json(newProduct)
    })
    .catch(err => {
        res.json({error: err.message})
    })

})


router.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)

    Product.findOneById(id)
    .then(result => {
        res.json({result: result})
    })
    .catch(err => {
        res.json({error: err.message})
    })
    
})

module.exports = router