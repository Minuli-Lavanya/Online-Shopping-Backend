const router = require("express").Router();
const { response, request } = require("express");
let Supplier_Detail = require("../Models/supplierDetails");


router.route("/add").post((req, res)=>{

    const supplier_id = req.body.supplier_id;
    const supplier_name = req.body.supplier_name;
    const email = req.body.email;
    const nic = req.body.nic;
    const phone_number = Number(req.body.phone_number);
    const gender = req.body.gender;

    const newSupplier = new Supplier_Detail({

        supplier_id,
        supplier_name,
        email,
        nic,
        phone_number,
        gender

    })

    newSupplier.save().then(()=>{
        res.json("Supplier Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Supplier_Detail.find().then((supplier)=>{
        res.json(supplier)
    }).catch((err)=>{
        console.log(err)
    })
})

// router.route("/update/:id").put(async (req, res) => {
//     let userId = req.params.id;
//     const {supplier_id, supplier_name, email, nic, gender} = req.body;

//     const updateSupplier = {
//         supplier_id,
//         supplier_name,
//         email,
//         nic,
//         phone_number,
//         gender
//     }

//     const update = await Supplier_Detail.findByIdAndUpdate(userId, updateSupplier).then(() => {
//         res.status(200).send({status: "User updated", user: update})
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).send({status: "Error with updating data", error: err.message});
//     })

    
// })

module.exports = router;