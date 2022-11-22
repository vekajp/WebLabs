document.addEventListener('DOMContentLoaded', () => {
    generateWishList();
    showWishlist();
});

let showWishlist = function() {
    let name =  decodeURI(document.URL).split("?")[1].split("&")[0].split("=")[1];
    document.querySelector(".wishlist_title").innerHTML = name;
    let list = document.querySelectorAll(".wishlist_items-list")[0];
    let items = JSON.parse(localStorage.getItem(name));
    for (let item of items) {
        let itemName = item[0];
        let link = item[1];
        let element = makeElement(itemName, link);
        list.appendChild(element);
    }
}

let makeElement = function(name, link) {
    let element = document.createElement("li");
    element.classList.add("wishlist_item");
    if (link === '') {
        element.innerHTML = `<p class="wishlist_item_text">${name}</p>`
    } else {
        element.innerHTML = `<a class="wishlist_item_text" href=${link}>${name}</a>`
    }
    return element;
}

let generateWishList = function () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}