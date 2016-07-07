var jsonfile = require('jsonfile');

var fPath = './testWriteFile.txt';
var data = {'CRV-394': ['function1', 'function2', 'function4', 'function10']}

jsonfile.writeFile(fPath, data, function(err) {
	console.error(err);
});
