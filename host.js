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

  host.reloadPage = function () {
    location.reload(true);
  }

  //
  // Exposes the $host object to global object
  return window.$host = host;
})(window);