
const router = require("express").Router();
const productSummary = require("../Models/productModel");

//View all product summaries
router.get('/', async(req,res)=>{
    try{
        const allDetails = await productSummary.find();
        res.status(200).send({data : allDetails});
    }catch(err){
        res.status(500).send({data : err});
    }
})

module.exports = router;
