#! /usr/bin/env node

var ncp = require('ncp').ncp;
ncp.limit = 16;

var userArgs = process.argv.slice(2);
if(userArgs[0] === "build"){

	console.log('noratic building src to sites');

  ncp('src', 'site', function (err) {
   if (err) {
     return console.error(err);
   }
   console.log('done!');
  });

}
