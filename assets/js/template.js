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

/**
 * Шаблон карточки товара
 * @param card Данные карточки
 * @returns {string} Шаблон
 */
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
          <span class="card-text ">
            ${card.description}
          </span>
        </div>
        <div class="card-footer">
        <p class="card-text text-muted">
            ${card.weight} грамм
        </p>
        <div class="d-flex justify-content-between align-items-center flex-wrap">
          <div class="card-text">
            <h6 class="mb-0">от ${card.price}₽</h6>
          </div>
           <div class="quantity btn-default" data-id="${card.id}">
            <button class="btn btn-danger btn-default w-100 quantity__order" data-id="${card.id}">Заказать</button>
            <div class="quantity__counter hidden" >
              <button class="btn btn-danger btn-default quantity__minus" data-id="${card.id}">-</button>
              <input name="quantity" type="text" class="quantity__input" data-id="${card.id}" value="0">
              <button class="btn btn-danger btn-default quantity__plus" data-id="${card.id}">+</button>
            </div>
           </div>
        </div>
      </div>
      </div>
    </div>
  `
}


