'use strict';
(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn(100);

    repos.downloadRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
