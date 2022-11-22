
(() => {
    const startTime = new Date().getTime();
    document.addEventListener('DOMContentLoaded', () => {
        const stampParagraph = document.getElementById("footer_page-loaded");
        window.onload = () => {
            stampParagraph.innerHTML += `Время загрузки страницы: ${(new Date().getTime() - startTime) / 1000} с`;
        };

        let links = document.querySelectorAll(".navigation_list-item a");
        let menuItems = document.querySelectorAll('.navigation_list-item');
        for (let i = 0; i < menuItems.length; i++) {
            if (document.location.pathname.endsWith('/')) {
                menuItems[0].classList.add('navigation_list-item_active')
            }
            if (document.location.pathname.endsWith(links[i].getAttribute("href").split('/').pop())) {
                menuItems[i].classList.add('navigation_list-item_active')
            }
        }
    });
})();
