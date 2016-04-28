'use strict';
(function(module) {
  var repoView = {};

  var render = function(repo) {
    var template = Handlebars.compile($('#github-template').text());
    return template(repo);
  };
  repoView.index = function() {
    $('#about').append(repos.all.map(render));
  };

  module.repoView = repoView;
})(window);
