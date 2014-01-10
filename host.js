;(function(window)  {
  "use strict";

  var host = {}
  , location = window.location || document.location;

  //
  // Exposes the $host object to global object
  return window.$host = host;
})(window);