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

Project.all = [];

Project.prototype.toHtml = function() {
  this.year = this.pubDate.slice(0,4);
  this.daysAgo = parseInt((new Date() - new Date(this.pubDate))/60/60/24/1000);
  var template = Handlebars.compile($('#project-template').html());
  return template(this);
};

Project.loadAll = function(data) {
  data.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });

  data.sort(function(a,b) {
    return (new Date(b.pubDate)) - (new Date(a.pubDate));
  });
};

Project.fetchAll = function() {
  $.ajax({
    type: 'HEAD',
    url: 'assets/json/portfolio-data.json',
    success: function(data, message, xhr){
      var eTag = xhr.getResponseHeader('eTag');
      if ((eTag) === localStorage.eTag) {
        Project.loadAll(JSON.parse(localStorage.storedProjects));
        appView.initIndexPage();
      } else {
        $.getJSON('assets/json/portfolio-data.json', function(data) {
          Project.loadAll(data);
          localStorage.storedProjects = JSON.stringify(data);
          localStorage.eTag = eTag;
          appView.initIndexPage();
        });
      }
    }
  });
};
