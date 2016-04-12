'use strict';

var projects = [];

function Project (x) {
  this.title = x.title;
  this.url = x.url;
  this.screenshot = x.screenshot;
  this.description = x.description;
  this.pubDate = x.pubDate;
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.find('h3').text(this.title);
  $newProject.find('img').attr('scr', this.screenshot);
  $newProject.removeClass('template');

  return $newProject;
};

projectData.forEach(function(x) {
  projects.push(new Project(x));
});

projects.forEach(function(x) {
  $('#projects').append(x.toHtml());
});
