import {fetchData, removePlaceholders} from "./fetch.js";

document.addEventListener('DOMContentLoaded', () => {
    let name =  decodeURI(document.URL).split("?")[1].split("&")[0].split("=")[1];
    let items = JSON.parse(localStorage.getItem(name));
    showWishlist(name, items);
});

let showWishlist = function(name, items) {
    document.querySelector(".wishlist_title").innerHTML = name;
    let list = document.querySelectorAll(".wishlist_items-list")[0];
    for (let item of items) {
        let itemName = item[0];
        let link = item[1];
        let element = makeElement(itemName, link);
        list.appendChild(element);
    }
    removePlaceholders();
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

export let displayFailure = function() {
    let errorBlock = document.querySelector('.wishlist_loading-error-container');
    errorBlock.classList.add('wishlist_loading-error-container_invisible');
    removePlaceholders();
}

let displayFetched = function (users) {
    let items = []
    for (let user of users) {
        items.push([user['name'], user['website']]);
    }
    showWishlist('Name', items);
}