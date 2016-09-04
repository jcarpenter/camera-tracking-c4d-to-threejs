var aeToJSON = require('ae-to-json/after-effects');
var ae = require('after-effects');
// ae(() => alert("Hello!\nFrom node.js"));

ae.execute(aeToJSON)
.then(function(json) {
  console.log(json);
})
.catch(function(e) {
  throw e;
});