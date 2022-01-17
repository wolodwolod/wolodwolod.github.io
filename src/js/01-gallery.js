// Add imports above this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line
const pictureGallery = document.querySelector('.gallery');

const pictureMarkup = createPictureMarkup(galleryItems);

pictureGallery.insertAdjacentHTML('beforeend', pictureMarkup);

pictureGallery.addEventListener('click', onPictureGalleryClick);

function createPictureMarkup(pics) {
  return pics
    .map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title = ${description} />
</a>
    `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionDelay:250  });
  
function onPictureGalleryClick(evt) {
    evt.preventDefault();
    
    if (evt.target.nodeName !== 'IMG') {
    return;
    }
  lightbox;
}


console.log(galleryItems);
