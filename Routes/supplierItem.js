const router = require("express").Router();
const { response, request } = require("express");
let Supplier_Item_Detail = require("../Models/supplierItemDetails");

router.route("/add").post((req, res)=>{

    const supItemId = req.body.supItemId;
    const supName = req.body.supName;
    const itemName = req.body.itemName;
    const purchasedDate = req.body.purchasedDate;
    const quantity = req.body.quantity;
    const unitprice = req.body.unitprice;
    const totalAmount = req.body.quantity*unitprice;

    const newItem = new Supplier_Item_Detail({

            supItemId,
            supName ,
            itemName ,
            purchasedDate ,
            quantity ,
            unitprice ,
            totalAmount 

    })

    newItem.save().then(()=>{
        res.json("New Item Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req, res)=>{
    Supplier_Item_Detail.find().then((item)=>{
        res.json(item)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;