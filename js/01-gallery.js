import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');

const imageEl = onCreateGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', imageEl);

galleryContainer.addEventListener("click", openImage );


console.log(onCreateGalleryItems(galleryItems));

let modalWind;

function onCreateGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
        }).join('');
};


function openImage(evt) {
  evt.preventDefault();
    
  if (!evt.target.classList.contains('gallery__image')) {
    return
  };
  createModalWindow(evt.target).show();
};


function createModalWindow(param) {
  const html = `<div class="modal">
  <img src="${param.dataset.source}" alt="${param.alt}" />
 </div>`;

 modalWind = basicLightbox.create(html, {
    modalWindShow: () => {
      window.addEventListener('keyup', onCloseModalKeyUp);
    },
    modalWindClose: () => {
      window.removeEventListener('keyup', onCloseModalKeyUp);
    },
  });
  return modalWind;
    
}

  

 galleryContainer.addEventListener("keydown", (event) => {
    if (event.target === "Escape") {
   return
    }
      modalWind.close();
});









 


  
// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)