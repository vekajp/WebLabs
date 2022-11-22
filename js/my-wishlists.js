document.addEventListener('DOMContentLoaded', () => {
    let wishlistList = document.querySelectorAll(".wishlist_items-list")[0];
    for (let i = 0; i < localStorage.length; i++) {
        let name = localStorage.key(i);
        let listItem = document.createElement("li");
        listItem.classList.add("wishlist-list_item");
        listItem.innerHTML = `<a href=\"../pages/wishlist-view.html?name=${name}\" class=\"wishlist-list_item-text\">${name}</a>`
        wishlistList.appendChild(listItem);
    }
});