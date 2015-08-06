#! /usr/bin/env node

var userArgs = process.argv.slice(2);
var searchPattern = userArgs[0];

if(userArgs[0] === "build"){

	console.log('noratic building src to sites');	

	var exec = require('child_process').exec;

	/*
	exec('cp -r ~/xyz/projects/noratic/src/ ~/xyz/projects/noratic/site', 
		function(err, stdout, stderr) {
		}
	);
	*/

	exec('node ~/xyz/projects/noratic/site/server.js', 
		function(err, stdout, stderr) {
			console.log('stdout: ', stdout);
			console.log('stderr: ', stderr);
		    if (error !== null) {
		        console.log('exec error: ', error);
		    }
		}
	);


}