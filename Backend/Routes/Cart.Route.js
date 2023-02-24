const { Router } = require('express');
const { authenticate } = require('../Middleware/Authentication.Middleware');
const { CartModel } = require('../Model/Cart.Model');
const cartRoute = Router();


// cartRoute.use(authenticate)
cartRoute.get('/', authenticate,async (req, res) => {

    const {user}=req.body;

    try {
       await CartModel.find({ user}).populate('productId').then(r => {
            return res.status(200).send(r)
        });
    } catch (e) {
        return res.status(400).send(e.message)
    }

})


cartRoute.post('/add',authenticate, async (req, res) => {
    const  productId = req.body;
   
    const {user}=req.body;
    
    try {
        
        let existingProduct = await CartModel.findOne({productId,user});
       
        if(existingProduct){
           return res.status(400).send('product already exists')
        }
       
        let cartItem = new CartModel({ productId, user });
        await cartItem.save()
        return res.status(200).send(cartItem);
        
    } catch (e) {
        return res.status(400).send(e.message)
    }
})

cartRoute.delete('/delete/:id',authenticate, async (req, res) => {

    const  productId = req.params.id;
   

    try {
       await CartModel.findOneAndDelete({productId});
        res.send({msg:`Product with id:${productId} has been deleted`})
        
    } catch (e) {
        return res.status(400).send(e.message)
    }
})


module.exports = {cartRoute};