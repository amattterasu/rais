/**
 * Производит отрисовку html-элементов по заданному шаблону
 * @param data Данные для отрисовки
 * @param renderTemplate Шаблон
 * @param target Место для вывода
 */
export function render(data, renderTemplate, target) {
  const out = [];
  data.forEach((item) => {
    out.push(renderTemplate(item));
  })
  $(`${target}`).html(out);
}