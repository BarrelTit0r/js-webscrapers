// ==UserScript==
// @name         Data.com Employee Scraper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Scrapes employee names from connect.data.com. Results will be displayed in the developer console for that page. Keep in mind that there is a timeout function and the results will not display immediately.
// @author       Skippy
// @match        https://connect.data.com/search*
// @grant        none
// ==/UserScript==

(function() {
	//Script
    setTimeout(function() {
    var employeeElements = document.querySelectorAll(".td-name > a");
    var names = "";
    for (var i = 0; i < employeeEleme// ==UserScript==
// @name         Data.com Employee Scraper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Scrapes employee names from connect.data.com. Results will be displayed in the developer console for that page. Keep in mind that there is a timeout function and the results will not display immediately.
// @author       Skippy
// @match        https://connect.data.com/search*
// @grant        none
// ==/UserScript==

(function() {
    //Script
    setTimeout(function() {
        var employeeElements = document.querySelectorAll(".td-name > a");
        var names = "";
        for (var i = 0; i < employeeElements.length; i++) {
            var nameList = (employeeElements[i].text).split(",");
            names += (nameList[1] + " " + nameList[0]).trim() + "\n";
        }
        console.log(names);
    }, 5000)
    //Script
})();
