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

    iziToast.show({
        class: 'wishlist_saved',
        title: 'Ура!',
        titleSize: 20,
        message: 'Вишлист успешно сохранен в локальное хранилище',
        color: '#E4C1F9',
        image: 'https://i.pinimg.com/originals/0e/60/dd/0e60dda3fe5a8311e850e908787653b6.png'
    });
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