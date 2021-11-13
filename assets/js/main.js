import {socialMedia, categories} from "./data.js";
import {render} from "./utils.js";
import {initScrollUpListeners} from "./scrollup.js";
import {socialTemplate, categoryTemplate, cardTemplate} from "./template.js";
import {initQuantity} from "./quantity.js";
import {BASE_URL} from "./const.js";

/**
 * Triggered when the application is ready
 */
$(() => {
  init();
  getAllData();
})

let allProducts = [];

function getAllData() {
  $.getJSON(`${BASE_URL}/test.php`,  (products) => {
    renderCards(products);
    allProducts = [...products]
    setTimeout(showPage, 400);
  });
}

function showPage() {
  initScrollUpListeners.call(this);
  $("#loader").fadeOut();
  $("#container-data").fadeIn()
  initQuantity.call(this);
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

/**
 * Функция отрисовки карточек товара
 * @param data Данные из /test.php
 */
function renderCards(data) {
  render(data, cardTemplate, '#cards-container');
}
