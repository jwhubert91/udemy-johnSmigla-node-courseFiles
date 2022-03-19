const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/',(req,res)=> {
  res.send('<h1>Homepage :)</h1><br /><a href="/api/products">Go to products</a>')
})

app.get('/api/products',(req,res)=> {
  const newProducts = products.map(product => {
    const {id,name,image} = product
    return {id,name,image}
  })
  res.json(newProducts)
})

app.get('/api/products/:productId',(req,res)=> {
  const { productId } = req.params
  const productIdNum = Number(productId)
  const singleProduct = products.find(product => product.id === productIdNum)
  if (!singleProduct) {
    return res.status(404).send('Product does not exist')
  }
  return res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId',(req,res)=> {
  console.log(req.params)
  res.send('Review route')
})

app.get('/api/v1/query',(req,res)=> {
  const { search, limit } = req.query
  let sortedProducts = [...products]
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search[0])
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0,Number(limit))
  }
  if (sortedProducts.length < 1) {
    // remember to return or you will get an error by trying to send a response after you've already sent one :)
    return res.status(200).json({
      success: true,
      data: [],
    })
  }
  res.status(200).json(sortedProducts)
})

app.listen(6969, ()=> {
  console.log('Server is listening on port 6969')
})