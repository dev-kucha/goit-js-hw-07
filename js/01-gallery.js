import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryContainer = document.querySelector('.gallery');
// console.log(galleryContainer);

const galleryMarkup = galleryItems.map(galleryItem => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`;
});
// console.log(galleryMarkup.join(''));

galleryContainer.innerHTML = galleryMarkup.join('');

// 2. Реализация делегирования на div.gallery и получение url большого изображения.

galleryContainer.addEventListener('click', getGalleryItemUrlOriginal);

function getGalleryItemUrlOriginal(evt) {
  evt.preventDefault();
  if (!evt.target.dataset.source) {
    return;
  }
  console.log(evt.target.dataset.source);
}

// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

// 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

galleryContainer.addEventListener('click', createModalLightbox);

function createModalLightbox(evt) {
  basicLightbox.create(`<img width="1400" height="900" src="${evt.target.dataset.source}">`).show();
}
