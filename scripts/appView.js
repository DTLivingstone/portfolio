'use strict';

var appView = {};

appView.handleMainNav = function() {
  $('nav').on('click', '.tab-button', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('nav .tab-button:first').click();
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

appView.handleResize = function() {
  $(window).resize(function() {
    if ($('#nav-button').css('display') === 'block') {
      $('#main-nav').hide();
    } else {
      $('#main-nav').show();
    }
  });
};

$(document).ready(function() {
  appView.handleMainNav();
  appView.handleNavButton();
  appView.populateFilters();
  appView.handleResize();
});
