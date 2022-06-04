import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(galleryItem => {
  return `<li><a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" /></a></li>`;
});

galleryContainer.innerHTML = galleryMarkup.join('');

// 2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.

// 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});
