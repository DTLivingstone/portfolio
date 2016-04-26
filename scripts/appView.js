'use strict';
(function(module) {

  var appView = {};

  appView.handleMainNav = function() {
    $('nav').on('click', '.tab-button', function() {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn(100);
    });
    $('nav .tab-button:first').click();
    if ($('#nav-button').css('display') === 'block') {
      $('#main-nav').hide();
    } else {
      $('#main-nav').show();
    }
  };

  appView.handleNavButton = function() {
    $('#nav-button').on('click', function() {
      $('#main-nav').toggle();
    });
  };

  appView.initIndexPage = function() {
    Project.all.map(function(a) {
      $('#projects').append(a.toHtml());
    });
    appView.handleMainNav();
    appView.handleNavButton();
    appView.populateFilters();
    appView.handleResize();
    appView.handleCategoryFilter();
    appView.handleYearFilter();
    appView.stats();
  };

  module.appView = appView;
})(window);
