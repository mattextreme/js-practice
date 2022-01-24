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
  
    $('.interest-hover').hover(
      function() {
        $(this).find('.text-contents').addClass('text-active');
      },
      function() {
        $(this).find('.text-contents').removeClass('text-active');
      }
    );
  });