import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  e.target;

  const urlLargeImage = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${urlLargeImage}">
`);
  instance.show();

  window.addEventListener("keydown", e => {
    if (e.code === "Escape") {
      instance.close();
    }
    window.removeEventListener("keydown", e => {
      if (e.code === "Escape") {
        instance.close();
      }
    });
  });
});
