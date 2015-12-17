// ==UserScript==
// @name          Datatableize
// @namespace     http://juan.one/userscripts
// @description   Datatableize Helvetas P2P
// @include       https://p2p.getunik.net/organisations/helvetas/*
// @grant         GM_getResourceText
// @resource      coffee main.coffee
// @version       0.1
// ==/UserScript==

eval(CoffeeScript.compile(GM_getResourceText(resourceName)));
