"use strict";

var RestAPI = require("limelight-api");

var API = function(config) {
	this.rest = new RestAPI({
		"host": "control.llnw.com",
		"name": "purge-api",
		"version": "1",
		"user": config.user,
		"apiKey": config.apiKey,
		"format": config.format,
		"debug": config.debug,
		"logger": config.logger
	});
};

API.prototype.validateHostname = function(hostname) {
	return this.rest.request({
		"endpoint": "validHostname",
		"data": {
			"hostname": hostname
		}
	});
};

API.prototype.validateRegex = function(regex) {
	return this.rest.request({
		"endpoint": "validRegex",
		"data": {
			"regex": regex
		}
	});
};

API.prototype.validateRewrite = function(acctId, url) {
	return this.rest.request({
		"endpoint": "validRewrite/" + acctId,
		"data": {
			"url": url
		}
	});
};

API.prototype.createPurge = function(data) {
	return this.rest.request({
		"method": "POST",
		"endpoint": "request",
		"data": JSON.stringify(data)
	});
};

API.prototype.getStatusById = function(id, options) {
	return this.rest.request({
		"endpoint": "requestStatus/" + id,
		"data": options
	});
};

API.prototype.getStatusByShortname = function(shortname, options) {
	return this.rest.request({
		"endpoint": "statusList/" + shortname,
		"data": options
	});
};

API.prototype.getEntitlements = function() {
	return this.rest.request({
		"endpoint": "purgeEntitlements"
	});
};

module.exports = API;
