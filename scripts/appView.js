'use strict';
(function(module) {

  var appView = {};

  appView.handleNavButton = function() {
    $('#nav-button').on('click', function() {
      $('#main-nav').toggle();
    });
  };

  appView.handleResize = function() {
    $(window).resize(function() {
      if ($('#nav-button').css('display') === 'block') {
        $('#main-nav').hide();
      } else {
        $('#main-nav').show();
      }
    });
  };

  appView.initIndexPage = function() {
    Project.all.map(function(a) {
      $('#projects').append(a.toHtml());
    });
    appView.handleNavButton();
    appView.handleResize();
  };

  module.appView = appView;
})(window);
