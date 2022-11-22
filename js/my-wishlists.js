document.addEventListener('DOMContentLoaded', () => {
    // fillWithActualData();
    fetchData(displayFetchedWishlists);
});


let fillWithActualData = function () {
    let wishlistList = document.querySelectorAll(".wishlist_items-list")[0];
    for (let i = 0; i < localStorage.length; i++) {
        let name = localStorage.key(i);
        displayItem(name, wishlistList);
    }
}


let fetchData = function (display) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => display(users));
}

let displayItem = function (name, wishlistList) {
    let listItem = document.createElement("li");
    listItem.classList.add("wishlist-list_item");
    listItem.innerHTML = `<a href=\"../pages/wishlist-view.html?name=${name}\" class=\"wishlist-list_item-text\">${name}</a>`
    wishlistList.appendChild(listItem);
}

let displayFetchedWishlists = function (users) {
    let wishlistList = document.querySelector(".wishlist_items-list");
    for (let user of users) {
        displayItem(user['name'], wishlistList);
    }
    document.querySelectorAll('.placeholder-content_item').forEach(x => {
        x.classList.remove('placeholder-content_item');
    });
}