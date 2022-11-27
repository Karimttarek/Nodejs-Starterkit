const UserModel = require('../models/UserModel')

/**
 * Display a listing of the resource.
 *
 * @return \Illuminate\Http\Response
 */
function index(req , res){
    
    UserModel.find().then((result) => {
        res.render('users' , { users:result})
    })
}

/**
 * Display the specified resource.
 *
 * @param  int  $id
 * @return Response
 */
function show(req,res){

    UserModel.findById(req.params.id)
    .then( (result) =>
    res.send(result)
    ).catch((err) => 
    console.log(err)
    )
}

 /**
  * export functions
  */
 module.exports = {
    index,
    show
}