import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(SimpleLightbox);

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
console.log(loaderEl);

const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(lightbox);

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchValue = searchFormEl.elements.user_query.value.trim();
  if (searchValue === '') {
    iziToast.error({
      message: 'Sorry, there no image you are looking',
      position: 'topRight',
    });
    return;
  }

  loaderEl.classList.remove('is-hidden');

  fetchPhotos(searchValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        galleryEl.innerHTML = '';

        return;
      }
      const galleryCardsTemplate = data.hits
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');
      galleryEl.innerHTML = galleryCardsTemplate;
      lightbox.refresh();
      searchFormEl.reset();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
