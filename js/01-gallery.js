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
