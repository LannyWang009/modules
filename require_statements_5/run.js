var theCat = require('./cat.js')
var theDog = require('./dog.js')
var theRV = require('./randomValue.js')

let x = theRV(1,2)
if (x==1) console.log(theCat);
else if (x==2) console.log(theDog)