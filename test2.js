var fs = require('fs');
var path = require('path');
var aeToJSON = require('ae-to-json/after-effects');
var ae = require('after-effects');
// var keyframes = require('keyframes')();

ae.options.errorHandling = true;
ae.options.es5Shim = true;
ae.options.aeQuery = true;

ae.execute(aeToJSON)
.then((json) => {
  var pathOut = path.join(__dirname, 'example.json');

  if(json) {
    fs.writeFileSync(
      pathOut,
      JSON.stringify(json, null, '  ')
    );

    console.log('EXAMPLE FILE WRITTEN TO', pathOut);
  } else {
    throw new Error('no json output from After Effects');
  }
})
.catch((e) => {
  throw e;
});


// keyframes.add({ time: 0, value: 0 })
// keyframes.add({ time: 1.5, value: 50 })
// keyframes.add({ time: 4, value: 100 })
 
// //get the interpolated value at the given time stamp 
// var eased = keyframes.value( timeStamp ) 
 
// //get the closest keyframe within given (time) radius 
// var closest = keyframes.nearest( timeStamp, radius )
 
// //get the keyframe that matches the given time stamp 
// var match = keyframes.get( timeStamp )
 
//the underlying array 
// console.log( keyframes.frames )
