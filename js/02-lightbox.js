import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery")
const galleryItemMarkupEl = createGalleryItemMarkup(galleryItems)

galleryContainerEl.insertAdjacentHTML("beforeend", galleryItemMarkupEl)
galleryContainerEl.addEventListener("click", galleryClick)

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



function galleryClick (event){
    if (event.target.classList.value !== "gallery__image"){
        return
    }
    
    new SimpleLightbox('.gallery a', {  captionDelay : 250  });
    console.log(event.target.title)
}
