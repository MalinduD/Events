let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');



router.use(bodyParser.urlencoded({
    extended: true
}));

let TourInfos = require('../models/tourinfo');
let AccountInfos = require('../models/signupusers');

router.get('/viewTours', function(req,res){
    console.log('View information called');
    

    TourInfos.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.send(docs);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;