document.addEventListener('DOMContentLoaded', () => {
    let add = document.querySelector('.wishlist-creation_form');
    add.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});

function addWishlistItem() {
    let list = document.querySelectorAll(".wishlist-creation_form_item-list")[0];
    let item = list.children.item(0);
    let newItem = item.cloneNode(true);
    newItem.childNodes.forEach(x => {
        x.value = '';
    })
    list.appendChild(newItem);
}

function saveWishlist() {
    let wishlistItems = []
    let listItems = document.querySelectorAll(".wishlist-creation_form_item-list")[0].children;
    let wishListName = document.querySelectorAll(".wishlist-creation_form_wishlist-name")[0].value;
    for (let listItem of listItems) {
        let name = listItem.children[0].value;
        let link = listItem.children[1].value;
        if (name === '') continue;
        wishlistItems.push([name, link]);
    }

    localStorage.setItem(wishListName, JSON.stringify(wishlistItems));
    reset();
}

function reset() {
    let list = document.querySelector(".wishlist-creation_form_item-list");
    while (list.children.item(1)) {
        list.removeChild(list.children.item(1));
    }
    document.querySelector(".wishlist-creation_form_wishlist-name").value = '';
    list.children.item(0).childNodes.forEach(x => {
        x.value = '';
    })
}