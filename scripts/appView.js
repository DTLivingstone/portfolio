'use strict';

var appView = {};

// appView.shortenDescription = function() {
//   var x = $('article p').text().substring(0,30);
//   console.log(x);
//   $('article p').text(x);
// };

appView.handleMainNav = function() {
  $('nav').on('click', '.tab-button', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
    $('nav .tab:first').click();
  });
};

$(document).ready(function() {
  appView.handleMainNav();
});
