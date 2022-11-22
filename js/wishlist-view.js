document.addEventListener('DOMContentLoaded', () => {
    let wishlistName =  document.URL.split("?")[1].split("&")[0].split("=")[1];
    showWishlist(wishlistName);
});

let showWishlist = function(name) {
    document.querySelector(".wishlist_title").innerHTML = name;
    let list = document.querySelectorAll(".wishlist_items-list")[0];
    let items = JSON.parse(localStorage.getItem(name));
    for (let i = 0; i < items.length; i++) {
        let itemName = items[i][0];
        let link = items[i][1];
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