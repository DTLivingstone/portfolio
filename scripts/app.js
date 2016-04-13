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
  $newProject.find('h4').text(this.pubDate);
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.find('p').html(this.description);
  $newProject.removeClass('template');

  return $newProject;
};

projectData.forEach(function(x) {
  projects.push(new Project(x));
});

projects.sort(function(a,b) {
  return (new Date(b.pubDate)) - (new Date(a.pubDate));
});

projects.forEach(function(x) {
  $('#projects').append(x.toHtml());
});
