/**
 * Добавление слушателей для кнопки скролла вверх
 */
export function initScrollUpListeners() {
  const $scrollUp = $('#scrollup');

  $scrollUp.on('click', () => {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  })

  $(window).on('scroll', () => {
    $(this).scrollTop() > 200 ? $scrollUp.fadeIn() : $scrollUp.fadeOut();
  });
}