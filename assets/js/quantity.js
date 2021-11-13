export  function initQuantity() {
  const minus = $('.quantity__minus');
  const plus = $('.quantity__plus');
  const input = $('.quantity__input');
  minus.on('click', function(e) {
    e.preventDefault();
    let value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });

  plus.on('click',function(e) {
    e.preventDefault();
    let value = input.val();
    value++;
    input.val(value);
  })
}