import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery")
const galleryItemMarkupEl = createGalleryItemMarkup(galleryItems)

galleryContainerEl.insertAdjacentHTML("beforeend", galleryItemMarkupEl)


function createGalleryItemMarkup(galleryItems){
    return galleryItems.map(({preview, original, description})=>{
        return `<li>    
        <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
          <img
            class="gallery__image"
            src="${preview}"
            alt=""
            title="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

    new SimpleLightbox('.gallery a', {  captionDelay : 250, captionsData: "title"});

