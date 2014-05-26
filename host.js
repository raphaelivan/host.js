;(function(window)  {
  "use strict";

  var
    host = {}
  , location = window.location || document.location;

  host.url = function (url) {
    return url ? location.assign(url) : location.href;
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

  host.params = function  (params) {
    if (params) {
      return location.search = transformHashOnString(params);
    };

    return location.search ? transformStringOnHash(location.search) : null;
  }

  host.reloadPage = function () {
    location.reload(true);
  }

  host.options = function () {
    for (var key in this) {
      console.log(typeof this[key] === 'function' ? key+ '()' : key);
    };
  }

  host.replace = function (file) {
    window.location.replace(file);
  }

  var transformStringOnHash = function (search) {
    var searchObject  = {};

    if (search.length > 1) {
      for (var nkey = 0,  keys = search.substr(1).split("&"); nkey < keys.length; nkey++) {
        var aKeys = keys[nkey].split("=");
        searchObject[aKeys[0]] = aKeys[1];
      };
    };
    return searchObject;
  }

  var transformHashOnString = function (search) {
    var searchString = '';

    for (var k in search) {
      searchString +=  (searchString.length > 1 ? '&' : '') + k + '=' + search[k];
    }
    return searchString;
  }

  //
  // Exposes the $host object to global object
  return window.$host = host;
})(window);