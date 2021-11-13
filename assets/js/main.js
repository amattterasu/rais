import { socialMedia, categories } from "./data.js";
import { render } from  "./utils.js";
import  { initScrollUpListeners } from "./scrollup.js";
import  { socialTemplate, categoryTemplate } from "./template.js";
import  { initQuantity } from "./quantity.js";

/**
 * Triggered when the application is ready
 */
$(() => {
  init();
  setTimeout(showPage, 400);
})

function showPage() {
  initScrollUpListeners.call(this);
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
  initQuantity();
  renderSocialMedia();
  renderCategories();
}

/**
 * Функция отрисовки медиа в footer
 */
function renderSocialMedia() {
  render(socialMedia, socialTemplate, '#media-out');
}

/**
 * Функция отрисовки категорий в main
 */
function renderCategories() {
  render(categories, categoryTemplate, '#categories-out');
}

