var express = require('express');

var router = express.Router();
/* GET home page. */

let x;
let y;

router.get('/', function(req, res, next) {

if(req.query.x ==undefined ) {

    x=Math.floor(Math.random()*10);

    y=Math.fround(Math.random());

    let y1=Math.cos(x,y);

    let y2=Math.asin(y);

    let y3=Math.Math.asinh(x);

    res.send('Math.cos() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.asin() applied to '+y+' is '+y2+"<br>"+'Math.asinh() applied to '+x+' is'+y3);
    }

else{

    x = req.query.x;

    let y1=Math.cos(x,x);

    let y2=Math.asin(x);

    let y3=Math.asinh(x);
    res.send('Math.cos() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.asin() applied to '+y+' is '+y2+"<br>"+'Math.asinh() applied to '+x+' is'+y3);

        }

    });
module.exports = router;