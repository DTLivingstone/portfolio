'use strict';

var appView = {};

appView.handleMainNav = function() {
  $('nav').on('click', '.tab-button', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(100);
  });
  $('nav .tab-button:first').click();
  if ($('#nav-button').css('display') === 'block') {
    $('#main-nav').hide();
  } else {
    $('#main-nav').show();
  }
};

appView.handleNavButton = function() {
  $('#nav-button').on('click', function() {
    $('#main-nav').toggle();
  });
};

appView.populateFilters = function() {
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

appView.handleCategoryFilter = function() {
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

appView.handleYearFilter = function() {
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

appView.handleResize = function() {
  $(window).resize(function() {
    if ($('#nav-button').css('display') === 'block') {
      $('#main-nav').hide();
    } else {
      $('#main-nav').show();
    }
  });
};

appView.initIndexPage = function() {
  Project.all.forEach(function(a) {
    $('#projects').append(a.toHtml());
  });
  appView.handleMainNav();
  appView.handleNavButton();
  appView.populateFilters();
  appView.handleResize();
  appView.handleCategoryFilter();
  appView.handleYearFilter();
};
