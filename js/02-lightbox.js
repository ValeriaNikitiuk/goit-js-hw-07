import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

const imageEl = onCreateGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', imageEl);




console.log(onCreateGalleryItems(galleryItems));


function onCreateGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
  <li><a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`;
        }).join('');
};





let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
    
 });
