// // <------------user----------->
// const elMovies = document.querySelector('.movies');
// const elMovieTemplate = document.querySelector('.movies__template').content;


// const elFilterSelect = document.querySelector('.movies__filter-select');
// const elFilterInput = document.querySelector('.movies__filter-input');
// const elFilterButton = document.querySelector('.movies__filter-button');

// let totalPages = 0;

// let type = 'movie';
// let search = 'panda';
// let page = 1;

// // <---------------movies------------------->
// document.getElementById('getMovies').addEventListener('click', getMovies);

// elFilterSelect.addEventListener('change', (e) => {
//     type = e.target.value;

//     elMovies.textContent = null;

//     getMovies();
// });


// elFilterButton.addEventListener('click', () => {
//     search = elFilterInput.value;

//     elMovies.textContent = null;

//     getMovies();

//     elFilterInput.value = null;
// });

// function getMovies() {
//     fetch(`https://www.omdbapi.com/?apikey=7e789dc5&s=${search}&type=${type}&page=${page}`)
//         .then((res) => res.json())
//         .then(data => {
//             const movieFragment = document.createDocumentFragment();

//             totalPages = Math.ceil(data.totalResults / 10);

//             data.Search.forEach(movie => {
//                 const elMovieItemTemplate = elMovieTemplate.cloneNode(true);

//                 elMovieItemTemplate.querySelector('.movies__item-title').textContent = movie.Title;
//                 elMovieItemTemplate.querySelector('.movies__item-image').setAttribute('src', movie.Poster);

//                 movieFragment.appendChild(elMovieItemTemplate);
//             });

//             elMovies.appendChild(movieFragment);
//         });
// }
// // <---------------/movies------------------->
