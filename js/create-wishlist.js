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