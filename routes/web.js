const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

router.get('/', (req,res) =>{
    res.render('index')
})


router.get('/users' , (UserController.index))
router.get('/user/:id' ,(UserController.show))


module.exports = router;