var test = require('tape')
var isCoolNumber = require(process.argv[2]||'./metatest.js')
   
 test('isCoolNumber accepts only cool numbers', function (t) {
   t.ok(isCoolNumber(42), '42 should be cool')
   t.end()
 })