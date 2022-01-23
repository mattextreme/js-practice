$(function() {
    // モーダル
    $('.signup-show').click(function() {
      $('#signup-modal').fadeIn();
    });
  
    $('.login-show').click(function() {
      $('#login-modal').fadeIn();
    });

    $('.close-modal').click(function() {
      $('#signup-modal').fadeOut();
      $('#login-modal').fadeOut();
    });
  
  });