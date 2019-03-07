// ==UserScript==
// @name         LinkedIn Employee Scraper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Scrapes employee names from LinkedIn. Linkedin only loads about a third of the page so you will need to actively scroll down on the page in order to get accurate results. Each new page you visit you will need to additionally click reload to activate the script. Results will be displayed in the developer console for that page. Keep in mind that there is a timeout function so these results will not display immediately.
// @author       Skippy
// @match        https://www.linkedin.com/search/results/all/*
// @grant        none
// ==/UserScript==

(function() {
    //Script
    setTimeout(function() {
        var nameItems = $(".actor-name");
        var names = "";
        for (var i = 0; i < nameItems.length; i++) {
            if(nameItems[i].innerText != "LinkedIn Member") {
                names += nameItems[i].innerText + "\n";
            }
        }
        console.log(names);
    }, 8000)
    //Script
})();
