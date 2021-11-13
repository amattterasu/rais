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
  const parentNode = $(`.quantity[data-id=${event.target.dataset.id}]`);
  let input = $(`input[data-id=${event.target.dataset.id}]`);
  const classList = event.target.classList;

  let value = input.val();
  if (classList.contains('quantity__minus')) {
    value = --value;
    if (value === 0) {
      toggle(parentNode)
    }
    console.log('quantity__minus', event.target.dataset.id);
  } else if (classList.contains('quantity__plus')) {
    value++;
    console.log('quantity__plus', event.target.dataset.id);
  }
  else if (classList.contains('quantity__order')) {
    toggle(parentNode)
    value++;
  }
  input.val(value);
}

function toggle(parentNode) {
  parentNode.children('.quantity__order').toggle();
  parentNode.children('.quantity__counter').toggle();
}