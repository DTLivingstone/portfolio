'use strict';
(function(module) {
  var projectController = {};

  projectController.index = function() {
    Project.fetchAll(appView.initIndexPage);
    $('.tab-content').hide();
    $('#projects').fadeIn(100);
  };

  module.projectController = projectController;
})(window);
