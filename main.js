var fs = require('fs');

var isRecord = false;
var isProgramStarted = false;

function startProgram() {
	isProgramStarted = true;
}

function startRecord() {
	isRecord = true;
}

function stopRecord() {
	
}

function writeFile(operations) {
	// record the step of this story to file -> JSON
	var fPath = './story/' + story + '.json';
	fs.writeFile(fPath, "", 'a', function(err) {
		console.error(err);
	});
}

function recordStory(story) {
	var operations = '{'
}