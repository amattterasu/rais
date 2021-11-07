/**
 * Triggered when the application is ready
 */
$(() => {
  init();
  setTimeout(showPage, 400);
})


function showPage() {
  $("#loader").fadeOut();
  $("#container-data").fadeIn()
}

function redirect() {
  const credential = false;

  if (!credential) {
    window.location.replace("/login.php");
  }
}

/**
 * Инициализация
 */
function init() {
  renderSocialMedia();
  renderCategories();
  initScrollUpListeners();
}

/**
 * Функция отрисовки медиа в footer
 */
function renderSocialMedia() {
  const socialMedia = [
    {name: 'facebook-f', href: 'https://facebook.com'},
    {name: 'twitter', href: 'https://twitter.com'},
    {name: 'google', href: 'https://google.com'},
    {name: 'instagram', href: 'https://instagram.com'},
    {name: 'github', href: 'https://github.com'},
  ];

  render(socialMedia, socialTemplate, '#media-out');
}

/**
 * Функция отрисовки категорий в main
 */
function renderCategories() {
  const categories = [
    {name: 'Роллы', href: '#'},
    {name: 'Ассорти', href: '#'},
    {name: 'Бургеры', href: '#'},
    {name: 'Пицца', href: '#'},
  ];

  render(categories, categoryTemplate, '#categories-out');
}

/**
 * Шаблон для элемента медиа
 * @param item Данные для атрибутов
 * @returns {string} Шаблон
 */
function socialTemplate(item) {
  return `<a 
              class="btn btn-outline-light btn-floating m-1"
              href="${item.href}"
              role="button">
            <i class="fab fa-${item.name}"></i>
          </a>`
}

/**
 * Шаблон для элемента котегории
 * @param item Данные для атрибутов
 * @returns {string} Шаблон
 */
function categoryTemplate(item) {
  return `<li class="nav-item active">
            <a class="nav-link" href=${item.href}>${item.name}</a>
          </li>`
}

/**
 * Производит отрисовку html-элементов по заданному шаблону
 * @param data Данные для отрисовки
 * @param renderTemplate Шаблон
 * @param target Место для вывода
 */
function render(data, renderTemplate, target) {
  const out = [];
  data.forEach((item) => {
    out.push(renderTemplate(item));
  })
  $(`${target}`).html(out);
}

/**
 * Добавление слушателей для кнопки скролла вверх
 */
function initScrollUpListeners() {
  const $scrollUp = $('#scrollup');

  $scrollUp.on('click', () => {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  })

  $(window).on('scroll', () => {
    $(this).scrollTop() > 200 ? $scrollUp.fadeIn() : $scrollUp.fadeOut();
  });
}


