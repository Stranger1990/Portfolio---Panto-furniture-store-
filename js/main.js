const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint"); // Для закрытия подсказок

// Клик по кнопкам с подсказками
/* Обход коллекции, чтобы повесить клик на каждую кнопку, т.к. его нельзя повесить на всю коллекцию.
Т.о. мы обходим коллекцию infoBtns и для каждого её эл-та создаём переменную btn. */
for (let btn of infoBtns) {
  btn.addEventListener("click", showHint); // На каждую кнопку вешаем событие "click".
}

// Определяем ф-ю showHint
function showHint(e) {
  //console.log("click");
  //console.log(this);
  /* this ссылается на тот элемент, по к-рому мы слушали событие и отражает это в консоли. 
  Т.е. ссылается на ту кнопку по которой кликнули. */
  // console.log(this.parentNode); // Ищем родительский элемент

  e.stopPropagation(); /* Данный метод призван остановить всплытие события клика, чтобы он не поднимался наверх и не возвращал "none". 
  Клик от кнопки не будет возвращаться на "родителей" */

  // Hide all hints. Скрываем все хинты при клике по любому хинту
  for (let hint of infoHints) {
    hint.classList.add("none");
  }

  // Show current hint
  this.parentNode.querySelector(".info-hint").classList.toggle("none"); // Находим эл-т с подсказкой и добавляем/удаляем класс none
}

// Закрываем подсказки при клике по всему документу
document.addEventListener("click", closeHints);

function closeHints() {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
}

// Запрещаем всплытие события клика при клике на подсказки
for (let hint of infoHints) {
  hint.addEventListener("click", (e) => e.stopPropagation());
}

// Swiper slider
const swiper = new Swiper(".swiper", {
  // loop: true,
  // freeMode: true,

  slidesPerView: 1,
  spaceBetween: 42,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    //   1024: {
    //     slidesPerView: 5,
    //     spaceBetween: 50,
    //   },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

// Tabs
const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    // Убираем активные классы у всех кнопок
    for (let btn of tabsBtns) {
      btn.classList.remove("tabs-controls__btn--active");
    }

    // Добавляем активный класс к текущей кнопке
    this.classList.add("tabs-controls__btn--active");
    /* Обращаемся к элементу, в к-ром слушаем событие (находясь в ф-ии), находим класс, через метод add добавляем нужный класс */

    // Получаем значении категории товаров, которые нужно включить
    console.log(this.dataset.tab);

    // Отобразить товары и скрыть ненужные
    for (let product of tabsProducts) {
      // Проверка на отображение всех слайдов
      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          /* tabValue - пример использования Кэмел-кейса */
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        }
      }
    }

    // Update Swiper
    swiper.update();
  });
}

// Mobile Nav
const mobileNavOpenBtn = document.querySelector("#open-mobile-nav-btn");
const mobileNavCloseBtn = document.querySelector("#close-mobile-nav-btn");
const mobileNav = document.querySelector("#mobile-nav");

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add("mobile-nav-wrapper--open");
}; // Кликаем по кнопке мобильной навигации mobileNavOpenBtn, мобильная навигация mobileNav меняет свой класс на open.

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove("mobile-nav-wrapper--open");
}; // Кликаем по кнопке закрытия мобильной навигации mobileNavCloseBtn, мобильная навигация mobileNav делает remove класса, к-рый её открывает.

// close-mobile-nav-btn
