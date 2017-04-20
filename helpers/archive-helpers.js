var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
	// console.log('readListOfUrls')
	var fileContents = fs.readFile(exports.paths.list, function(err, data){
		var test = data.toString().split('\n');
		if (callback) {
			callback(test)
		}
	});
	return fileContents;
};

exports.isUrlInList = function(url, callback) {
	// console.log('isUrlInList')
	var fileContents = exports.readListOfUrls(callback);
	// console.log('---------------', fileContents.find(url))
	return fileContents.includes(url);
};

exports.addUrlToList = function(url, callback) {
	// // console.log('addUrlToList')
	// var test = exports.isUrlInList(url, callback)
	// // console.log('***', test)
	// if(exports.isUrlInList(url, callback)){
	// } else {
	// 	fs.appendFile(exports.paths.list, callback);
	// }
};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};
