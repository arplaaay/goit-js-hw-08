import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function makeGalleryPhotosMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" title="${description}" />
        </a>`;
		})
		.join("");
}

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryPhotosMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
	captionDelay: 250
});

