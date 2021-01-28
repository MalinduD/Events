let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');


let cors = require('cors');
let jwt = require('jsonwebtoken');


router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(cors());

process.env.SECRET_KEY = 'secret'

let SignupUsers = require('../models/signupusers');


router.post('/SigninUsers', function(req, res){

    console.log('Signin Customers Post Called');
    console.log(req.body);


    let Email = req.body.uEmail;
    let Password = req.body.uPassword;
    

    let errors = req.validationErrors;

    SignupUsers.findOne({email:Email}, function(err, SigninUser){
        console.log(SigninUser);
        if(SigninUser){
            console.log('Customer email is matched');
            
            SignupUsers.findOne({password:Password}, function(err, Customer){
                if(Customer){
                    console.log('Customer password is matched');
                   
                    const payload = {
                        _id:Customer._id,
                        fName:Customer.fName,
                        lName:Customer.lName,
                        email:Customer.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn:1440
                    })
                    res.redirect('/Signin/TourInfo/' +token+ '/'+ Customer.fName+'/'+Customer.email);
                }else{
                    console.log('Customer password is not matched');
                    res.redirect('/Signin');
                }
            })
        }else{
            console.log('Customer not found'); 
            
            res.redirect('/Signin');
        }
    })

});


module.exports = router;