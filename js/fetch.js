export function fetchData (displaySuccess, displayFailure) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            displaySuccess(users);
            removePlaceholders();
        })
        .catch((error) => {
            displayFailure();
            removePlaceholders();
        });
}

export let removePlaceholders = function () {
    document.querySelectorAll('.placeholder-content_item').forEach(x => {
        x.classList.remove('placeholder-content_item');
    });
}