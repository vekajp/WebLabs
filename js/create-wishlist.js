function addWishlistItem() {
    let list = document.querySelectorAll(".wishlist-creation_form_item-list")[0];
    if (list.children.length === 10) {
        alert("Кто-то много хочет")
        return;
    }
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
        wishlistItems.push([name, link]);
    }

    localStorage.setItem(wishListName, JSON.stringify(wishlistItems));
    alert('Вишлист успешно сохранен\nКоличество вишлистов на данный момент: ' + localStorage.length)
}