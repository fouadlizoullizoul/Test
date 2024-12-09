const express =require('express');
const app=express()
const port= 5000;

const products=[]
app.use(express.json())


app.post('/api/products',(req,res)=>{
    const {price,name}=req.body;

    //add product
    const newProduct={id:products.length + 1,name,price};
    products.push(newProduct)

    res.status(200).json(newProduct)

})

app.listen(port,()=>{
    console.log('server',port)
})