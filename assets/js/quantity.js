import {addToCart} from "./cart.js";

/**
 * Инициализация элемента отображения количества
 */
export function initQuantity() {
  const quantity = $('.quantity');
  quantity.on('click', function (event) {
    changeQuantity.call(this, event);
  })
}

/**
 * Логика изменения счетчика
 * @param event Событие клика по счетчику
 */
function changeQuantity(event) {
  const id = event.target.dataset.id;
  const parentNode = $(`.quantity[data-id=${id}]`);
  let input = $(`input[data-id=${id}]`);
  const classList = event.target.classList;
  let value = input.val();
  console.log(value)
  if (classList.contains('quantity__minus')) {
    value = --value;
    if (value === 0) {
      toggle(parentNode)
    }
    console.log('quantity__minus', id);
  } else if (classList.contains('quantity__plus')) {
    value++;
    console.log('quantity__plus', id);
  }
  else if (classList.contains('quantity__order')) {
    toggle(parentNode)
    value = 1;
  }

  if (value || value === 0) {
    addToCart(id, value);
    input.val(value);
  }
}

function toggle(parentNode) {
  parentNode.children('.quantity__order').toggle();
  parentNode.children('.quantity__counter').toggle();
}