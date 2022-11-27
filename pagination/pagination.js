// const res = fetch('https://www.omdbapi.com/?apikey=7e789dc5&s=panda')
// .then((res) => res.json())
// .then(data => {
//     const movieFragment = document.createDocumentFragment();

//     totalPages = Math.ceil(data.totalResults / 10);
// })

// const list__element = document.getElementById('list');
// const pagination__element = document.getElementById('pagination');

// let current_page = 1;
// let rows = 5;

// function DisplayList (items, wrapper, rows_per__page, page){
//     wrapper.innerHTML = "";
//     page--;

//     let start = rows_per__page * page;
//     let end = start + rows_per__page
//     let paginatedItems = items.slice(start, end);

//     for(let i = 0; i < paginatedItems.length; i++){
//         let item = paginatedItems[i];

//         let item_element = document.createElement('div');
//         item_element.classList.add('item');
//         item_element.innerText = item;

//         wrapper.appendChild(item_element);

//     }
// }
// function setupPagination (items, wrapper, rows_per__page){
//     wrapper.innerHTML = "";

//     let page_count = Math.ceil(items.length / rows_per__page);
//     for(let i = 1; i < page_count + 1; i++){
//         let btn = PaginationButton(i, items);
//         wrapper.appendChild(btn)
//     }
// }
// function PaginationButton (page, items){
//     let button = document.createElement('button');
//     button.innerText = page;

//     if(current_page == page) button.classList.add("active");

//     button.addEventListener('click', function () {
//         current_page = page;
//         DisplayList(items, list__element, rows, current_page);
//     });

//     return button;

// }
// DisplayList(list__items, res, list__element, rows, current_page);
// setupPagination(list__items, res, pagination__element, rows);

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    return data;
}
async function main() {
    const postsData = await getData();
    let currentPage = 1;
    let rows = 10;

    function displayList(arrData, rowPerPage, page) {
        const postsEl = document.querySelector('.posts');
        postsEl.innerHTML = "";
        page--;

        const start = rowPerPage * page;
        const end = start + rowPerPage;
        const paginatedData = arrData.slice(start, end);

        paginatedData.forEach((el) => {
            const postEl = document.createElement('div');
            postEl.classList.add("post");
            postEl.innerText = `${el.title}`;
            postsEl.appendChild(postEl);
        })

    }
    function displayPagination(arrData, rowPerPage) {
        const paginationEl = document.querySelector('pagination');
        const pagesCount = Math.ceil(arrData.length / rowPerPage);
        const ulEl = document.createElement("ul");
        ulEl.classList.add('pagination__list');
        for(let i = 0; i < pagesCount; i++) {
            const liEl = displayPaginationBtn(i + 1);
            ulEl.appendChild(liEl)
        }
           paginationEl.appendChild(ulEl)
    }
    function displayPaginationBtn(page) {
        const liEl = document.createElement("li");
        liEl.classList.add('pagination__item')
        liEl.innerText = page
        if( currentPage == page) liEl.classList.add('pagination__item__active');

        liEl.addEventListener('click', () => {
            currentPage = page;
            displayList(postsData, rows, currentPage)

            let currentItemLi = document.querySelector('li.pagination');
            currentItemLi.classList.remove('pagination__item__active');

            liEl.classList.add('pagination__item__active');

        })
        return liEl;
    }
    displayList(postsData, rows, currentPage);
    displayPagination(postsData, rows);
}
main();