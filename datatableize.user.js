// ==UserScript==
// @name          Datatableize
// @namespace     http://juan.one/userscripts
// @description   Datatableize Helvetas P2P
// @include       https://p2p.getunik.net/organisations/helvetas/*
// @grant         GM_getResourceText
// @resource      coffee https://raw.githubusercontent.com/romeroabelleira/datatableize/master/main.coffee
// @version       1.0.1
// ==/UserScript==
console.log("About to load coffee.");
eval(CoffeeScript.compile(GM_getResourceText(coffee)));
console.log("Did I just load coffee?");
