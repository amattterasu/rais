export let cart = {};

/**
 * Добавить в корзину
 * @param id Идентификатор товара
 * @param value Количество товара
 */
export function addToCart(id, value) {
  cart[id] = Number(value);
  const sumValues = value => Object.values(value).reduce((prev, cur) => prev + cur);
  const cartTitle = sumValues(cart) ? `В корзине: ${sumValues(cart)}` : 'Корзина';
  $('#cart').text(cartTitle);
}