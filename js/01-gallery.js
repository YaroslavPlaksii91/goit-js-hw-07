import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = makeGalleryMarkup(galleryItems);

galleryRef.innerHTML = galleryMarkup;
galleryRef.addEventListener("click", onGalleryImgClick);

function makeGalleryItem({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}

function makeGalleryMarkup(images) {
  return images.map((image) => makeGalleryItem(image)).join("");
}

function onGalleryImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `<img
        src="${event.target.dataset.source}"
     />`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  modal.show();

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
}
