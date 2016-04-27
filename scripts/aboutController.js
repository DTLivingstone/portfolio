'use strict';
(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn(100);
  };

  module.aboutController = aboutController;
})(window);
