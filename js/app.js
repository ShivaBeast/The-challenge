(function ()
{
	"use strict";

	// wacht tot het klaar is
	document.addEventListener("deviceready", deviceInit, false);

	function deviceInit() {

	}

	function getDeviceInfo() {

		var info = "cordova versie:" + device.cordova 		+ "<br>" +
				   "Model:" 		 + device.model 		+ "<br>" + 
				   "Platform:" 		 + device.platform 		+ "<br>" + 
				   "UUID:" 			 + device.uuid 			+ "<br>" + 
				   "OS versie:" 	 + device.version 		+ "<br>" + 
				   "Fabrikant:" 	 + device.manufacturer 	+ "<br>" + 
				   "Serienummer:" 	 + device.serial 		+ "<br>" + 
				   "Is virtueel:" 	 + device.isVirtual 	+ "<br>";

		return info;
	}

}());