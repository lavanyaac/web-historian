var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var helpers = require('./http-helpers');

// require more modules/folders here!
// var actions = {
//   'GET': function(request, response) {
//     archive.sendResponse(response, {results: messages});
//   },
//   'POST': function(request, response) {
//     archive.collectData(request, function(message) {
      
//       archive.sendResponse(response, {objectId: message.objectId}, 201);
//     });
//   },
//   'OPTIONS': function(request, response) {
//     archive.sendResponse(response, null);
//    }
// };


exports.handleRequest = function (req, res) {
  if (req.method === "GET") {
  	if(req.url === "/"){
   	  fs.readFile(archive.paths.siteAssets + '/index.html', 'utf8', function(err, data){
        if(data){	
          // helpers.serveAssets(res, data, function(){} )
          res.writeHead(200, helpers.headers )
          res.end(data);
        }
      });
    } else {
      fs.readFile(archive.paths.archivedSites + req.url, 'utf8', function(err, data){
        if(data){
          res.writeHead(200, helpers.headers )
          res.end(data);
        } else {
	    	res.writeHead(404, helpers.headers )
	        res.end();
        }
      });
    }
  }
  if(req.method === 'POST'){
  	console.log(req.url)
    req.on('data', function(chunk){
      // write req.url into sites.txt

      console.log('POST DATA.........',chunk);
  	})
  	archive.addUrlToList(req.url, function(err){
  		if(err){
  			console.error(err);
  		}
  	})
  	res.writeHead(302, helpers.headers);
  	res.end(JSON.stringify(req.url));
  }
  // res.end(archive.paths.list);
};
