var express = require('express');
 var router = express.Router();
 var User=require('../models/product_model');


router.put('/:id',function(req,res,next){
 
User.deleteProduct(req.params.id,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 module.exports=router;