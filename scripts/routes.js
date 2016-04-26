'use strict';
(function(module) {
  var routes = {};

  console.log('foo');
  routes.handle = function() {
    page('/', pages.things);
    about('/', about.things);
    page('*', notfound.stuff);

    page();
  };

  module.routes = routes;
})(window);
