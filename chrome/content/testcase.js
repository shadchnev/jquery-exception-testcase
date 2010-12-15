function onDOMLoad(event) {
  if (!event || !event.originalTarget) return;
  var browser = gBrowser.getBrowserForDocument(event.originalTarget);
  if (!browser) return;  
	var scriptLoader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"].getService(Components.interfaces.mozIJSSubScriptLoader);
	scriptLoader.loadSubScript("chrome://pullrequest128/content/jquery-1.4.4.js", { window: browser.contentDocument.defaultView.wrappedJSObject}); // this will throw an exception on FF4 but not on FF3
}

window.addEventListener("load", function() {
	document.getElementById("appcontent").addEventListener("DOMContentLoaded", onDOMLoad, true);  
}, false);
