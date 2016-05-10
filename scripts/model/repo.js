'use strict';
(function(module) {
  var repos = {};

  repos.all = [];

  repos.downloadRepos = function(callback) {
    $.ajax({
      url:      'https://api.github.com/users/DTLivingstone/repos' + '?per_page=5' + '&sort=updated',
      type:     'GET',
      headers:  {'Authorization': 'token ' + githubToken},
      success:  function(data) {
        repos.all = data;
        callback();
      }
    });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
