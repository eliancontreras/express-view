const express =require('express');
const coinRoutes=require('./coins');
const router=express.Router();

router.use('/coins', coinRoutes);

module.exports=router;