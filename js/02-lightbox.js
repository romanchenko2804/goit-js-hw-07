import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<li>
        <a class="gallery__item" href="${image.original}" >
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
      </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox(".gallery__item", {
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
