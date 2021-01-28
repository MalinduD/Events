let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');



router.use(bodyParser.urlencoded({
    extended: true
}));

let TourInfos = require('../models/tourinfo');
let AccountInfos = require('../models/signupusers');

router.post('/addInformations', function (req,res) {
    console.log('Add Info Post Called');
    console.log(req.body);

    let Author = req.body.uAuthor;
    let Email = req.body.uEmail;
    let Country = req.body.uCountry;
    let Location = req.body.uLocation;
    let When = req.body.uWhen;
    let Days = req.body.uDays;
    let Description = req.body.uDescription;
    let token = req.body.hide;

    let errors = req.validationErrors;

    if(errors) {
        console.log('errors reported in add information post');
    } else {
      
                let newInfo = new TourInfos({
                    reviewer:Author,
                    email:Email,
                    country:Country,
                    location:Location,
                    when:When,
                    days:Days,
                    descrip:Description
                    
                });
                req.session.newInfo = newInfo._id;  

                newInfo.save(function (err) {
                    if(err) return console.log(err);
                    console.log(newInfo);
                    console.log('Tour information Successfully Added.');
                    
                     res.redirect('/Signin/TourInfo/' +token+ '/'+ newInfo.reviewer+'/'+newInfo.email);
                })
            
        
    }

});

router.get('/AccountInformations/:email', function(req,res){
    console.log('View information called');
    console.log(req.params.email);

    let dEmail = req.params.email;

    let errors = req.validationErrors;
    
    AccountInfos.findOne({email:dEmail}, function(err, viewCustomer){
        if(viewCustomer){
            console.log('Viewing user found');
        }
        else{
            console.log('view user not found');
        }
    }).exec().then(docs =>{
        console.log(docs);
        res.send(docs);
    }).catch(err =>{
        console.log(err);
    })
});

router.post('/updateAccount',function (req,res) {

    console.log('update account called');


    let foundingEmail = req.body.upEmail;
    let eFname = req.body.upFname;
    let eLname = req.body.upLname;
    let eMobile = req.body.upMobile;
    let ePassword =req.body.upPassword;
    let token = req.body.uphide;

     let errors = req.validationErrors;

    if(errors) {
        console.log('update error reported');
    }
    else {

        AccountInfos.findOneAndUpdate({email:foundingEmail},{fName:eFname,lName:eLname,mobile:eMobile,password:ePassword}).then(function(updatedCustomer) {
            if(updatedCustomer){
                res.redirect('/Signin/TourInfo/' +token+ '/'+updatedCustomer.fName +'/'+updatedCustomer.email);    
            }
            
        });
    }

});

router.get('/deleteAccount/:demail', function (req,res) {
    console.log('Delete Account Called.');

    console.log(req.params.demail);

    let Email = req.params.demail;

    let errors = req.validationErrors;

    if(errors) {
        console.log('error reported in customers');
    } else {
        AccountInfos.findOne({email:Email}, function(err,signupUser) {
            if(signupUser) {
                console.log('Account Found');
                AccountInfos.findByIdAndDelete(signupUser._id, function(err) {
                    if(err) return console.log(err);
                    console.log('Successfully Deleted Account');
                   
                })
            }
        });
    }
});

module.exports = router;