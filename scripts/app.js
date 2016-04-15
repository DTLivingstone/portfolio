'use strict';

var projects = [];

function Project(opts) {
  this.title = opts.title;
  this.url = opts.url;
  this.screenshot = opts.screenshot;
  this.description = opts.description;
  this.pubDate = opts.pubDate;
  this.category = opts.category;
  this.year = opts.pubDate.slice(0,4);
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.data('category', this.category); //not working
  $newProject.data('year', this.year); //not working
  $newProject.find('h3').text(this.title);
  $newProject.find('#date').text(this.pubDate);
  $newProject.find('#days').text(parseInt((new Date() - new Date(this.pubDate))/60/60/24/1000));
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.find('p').text(this.description);
  $newProject.removeClass('template');
  return $newProject;
};

projectData.forEach(function(obj) {
  projects.push(new Project(obj));
});

projects.sort(function(a,b) {
  return (new Date(b.pubDate)) - (new Date(a.pubDate));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
