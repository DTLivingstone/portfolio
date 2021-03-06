'use strict';
(function(module) {

  var projectView = {};

  projectView.populateFilters = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var category = $(this).attr('data-category');
        if ($('#category-filter option[value ="' + category + '"]').length === 0) {
          $('#category-filter').append('<option value="' + category + '">' + category + '</option>');
        }
        var year = $(this).attr('data-year');
        if (($('#year-filter option[value = "' + year + '"]').length === 0)) {
          $('#year-filter').append('<option value="' + year + '">' + year + '</option>');
        }
      }
    });
  };

  projectView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn(100);
      } else {
        $('article').fadeIn(100);
        $('article.template').hide();
      }
      $('#year-filter').val('');
    });
  };

  projectView.handleYearFilter = function() {
    $('#year-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-year="' + $(this).val() + '"]').fadeIn(100);
      } else {
        $('article').fadeIn(100);
        $('article.template').hide();
      }
      $('#category-filter').val('');
    });
  };

  projectView.stats = function() {
    var totalWords = Project.all.map(function(obj) {
      return obj.description.match(/\S+/g).length;
    })
    .reduce(function(acc, curr) {
      return acc + curr;
    });
    var projectCount = Project.all.length;
    var avgWords = Math.round(totalWords/projectCount);
    console.log('You\'ve written', totalWords, 'words across', projectCount, 'projects, averaging', avgWords, 'words per project.');
  };

  projectView.initIndexPage = function() {
    Project.all.map(function(a) {
      $('#projects').append(a.toHtml());
    });
    projectView.populateFilters();
    projectView.handleCategoryFilter();
    projectView.handleYearFilter();
    projectView.stats();
  };

  module.projectView = projectView;
})(window);
