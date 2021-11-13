/**
 * Шаблон для элемента медиа
 * @param item Данные для атрибутов
 * @returns {string} Шаблон
 */
export function socialTemplate(item) {
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
export function categoryTemplate(item) {
  return `<li class="nav-item active">
            <a class="nav-link" href=${item.href}>${item.name}</a>
          </li>`
}