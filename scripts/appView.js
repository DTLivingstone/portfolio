'use strict';

var appView = {};

appView.handleMainNav = function() {
  $('nav').on('click', '.tab-button', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('nav .tab-button:first').click();
};

$(document).ready(function() {
  appView.handleMainNav();
});
