var express = require('express');
var router = express.Router();
const artistCont= require('../model/artist')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/artist',async function(req,res){
     try{
          let artists= await artistCont.find({});
          res.json(artists);
      } catch(err){
          console.log(err)
      }


});


router.post('/artist',async function(req,res){
  try{
      let artist =  new artistCont(req.body)
      let result = await artist.save();
      res.json(result);  
  } catch( err){
    console.log("in catch",err)
  } 

});


router.put('/artist/:id', async function(req,res){
   try{
      let result = await artistCont.findOneAndUpdate({_id:req.body.id},req.body,{runValidators: false, new:true})
      console.log(result)
       res.json(result);
    }catch(err){
     console.log("in catch", err)
   }



});

router.delete('/artist/:id',async function(req,res){
  try{
    //returns null if not exists.
    let result = await artistCont.findOneAndDelete({_id:req.params.id})
    res.json(result);
  }catch(err){
    if (err.name=="CastError"){
    } ;
  } 

});








module.exports = router;
