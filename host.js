;(function(window)  {
  "use strict";

  var
    host = {}
  , location = window.location || document.location;

  host.location = function (loca) {
    return loca ? location.assign(loca) : location.href;
  }

  host.protocol = function (protocol) {
    return protocol ? (location.protocol = protocol) : location.protocol;
  }

  host.hash = function (hash) {
    return hash ? location.hash = hash : location.hash;
  }

  host.addHash = function (hash) {
    location.hash += "#" + hash;
  }

  //
  // Exposes the $host object to global object
  return window.$host = host;
})(window);