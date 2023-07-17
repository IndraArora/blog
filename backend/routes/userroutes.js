const {usersignup , userlogin} = require('../controllers/usercontroller');

const express = require('express')
const router = express.Router();


router.post('/signup' , usersignup);
router.post('/login' , userlogin);


module.exports = router