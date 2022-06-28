import { galleryItems } from './gallery-items.js';
// Change code below this line


// console.log(galleryItems.map(({preview, original, description})=>{
//     return `<div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//       <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </div>`;
// }).join(""))


const galleryContainerEl = document.querySelector(".gallery")
const galleryItemMarkupEl = createGalleryItemMarkup(galleryItems)

galleryContainerEl.insertAdjacentHTML("beforeend", galleryItemMarkupEl)
galleryContainerEl.addEventListener("click", galleryClick)


function createGalleryItemMarkup(galleryItems){
    return galleryItems.map(({preview, original, description})=>{
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function galleryClick(event) {
    if (event.target.classList.value !== "gallery__image"){
        return
    }
    const largeUrl = event.target.dataset.source
    

    const instance = basicLightbox.create(`
    <img src="${largeUrl}" width="800" height="600">
`)

instance.show()
    
    }







