import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

const imageEl = onCreateGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', imageEl);

galleryContainer.addEventListener("click", openImage );


console.log(onCreateGalleryItems(galleryItems));


function onCreateGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
        }).join('');
};


function openImage(evt) {
  evt.preventDefault();
    
};


let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
    
 });
