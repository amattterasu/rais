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

export function cardTemplate(card) {
  return `
    <div card-id="${card.id}" class="col">
      <div class="card h-100">
        <img class="card-img-top"
           src="assets/img/logo.svg"
           alt="Image"
        />
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <small class="card-text text-secondary">
            ${card.description}
          </small>
        </div>
        <div class="card-footer">
        <p class="card-text">
          <small class="text-muted">
            ${card.weight} грамм
          </small></p>
        <div class="d-flex justify-content-between align-items-center">
          <p class="card-text m-0">от
            ${card.price}₽
          </p>
           <div class="quantity btn-default">
            <button class="btn btn-danger btn-default quantity__minus" data-id="${card.id}">-</button>
            <input name="quantity" type="text" class="quantity__input" value="1">
            <button class="btn btn-danger btn-default quantity__plus" data-id="${card.id}">+</button>
           </div>
        </div>
      </div>
      </div>
    </div>
  `
}


