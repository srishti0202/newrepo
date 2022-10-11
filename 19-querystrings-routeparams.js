const express = require('express');
const {products} = require('./data');
const app = express();

app.get('/', (req, res)=> {
        res.send('<h1>Home Page</h1><a href = "/api/products">products</a>')
})

app.get('/api/products', (req, res)=> {
        const newProducts = products.map((product)=>{
                const {id, name, image} = product
                return {id, name, image}
        });
        res.json(newProducts);
})

// productID is the route parameter (set route parameter as :(name of parameter))
app.get('/api/products/:productID', (req, res)=> {
        console.log(req.params);
        const { productID } = req.params
       const singleProduct = products.find(
        (product) => product.id === Number(productID))

        if(!singleProduct){
                return res.status(404).send("Product doesn't exist");
        }
       res.json(singleProduct)
})


app.get('/api/v1/query', (req, res)=>{
         const { search, limit } = req.query
         let sortedProduct = [...products];
         
         if(search){
                sortedProduct = sortedProduct.filter((product)=>{
                         return product.name.startsWith(search)
                        })
         }

         if(limit){
                sortedProduct = sortedProduct.slice(0, Number(limit));
         }

         if(sortedProduct.length<1){
                res.status(200).json({success : true, data : []})
         }

         res.status(200).json(sortedProduct);
})
app.listen(5000, ()=> {
        console.log("server is up and running on port 5000...");
})