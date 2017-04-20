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
	var fileContents = fs.readFile(list, 'r', callback);
	return fileContents;
};

exports.isUrlInList = function(url, callback) {
	var fileContents = readListOfUrls(callback);
	return fileContents.find(url);
};

exports.addUrlToList = function(url, callback) {
	if(isUrlInList(url, callback)){
		return;
	}
	fs.appendFile(list, 'a', callback);
};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};
