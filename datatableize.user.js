// ==UserScript==
// @name          Datatableize
// @namespace     http://juan.one/userscripts
// @description   Datatableize Helvetas P2P
// @include       https://p2p.getunik.net/organisations/helvetas/*
// @grant         GM_getResourceText
// @version       0.1
// @resource      coffee https://raw.githubusercontent.com/romeroabelleira/datatableize/master/main.coffee
// ==/UserScript==

eval(CoffeeScript.compile(GM_getResourceText(resourceName)));
