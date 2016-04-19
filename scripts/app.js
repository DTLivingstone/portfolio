'use strict';

var projects = [];

function Project(opts) {
  this.title = opts.title;
  this.url = opts.url;
  this.screenshot = opts.screenshot;
  this.description = opts.description;
  this.pubDate = opts.pubDate;
  this.category = opts.category;
  // for (key in opts) {
  //   this[key] = opts[key];
  // };
};

Project.prototype.toHtml = function() {
  this.year = this.pubDate.slice(0,4);
  this.daysAgo = parseInt((new Date() - new Date(this.pubDate))/60/60/24/1000);
  var template = Handlebars.compile($('#project-template').html());
  return template(this);
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
