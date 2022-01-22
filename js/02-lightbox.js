import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = makeGalleryMarkup(galleryItems);

galleryRef.innerHTML = galleryMarkup;

function makeGalleryItem({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

function makeGalleryMarkup(images) {
  return images.map((image) => makeGalleryItem(image)).join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
