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
  const classList = event.target.classList;
  let input = $(`input[data-id=${event.target.dataset.id}]`);
  let value = input.val();
  if (classList.contains('quantity__minus')) {
    value = value > 1 ? --value : value
    console.log('quantity__minus', event.target.dataset.id);
  } else  if (classList.contains('quantity__plus')) {
    value++;
    console.log('quantity__plus', event.target.dataset.id);
  }
  input.val(value);
}