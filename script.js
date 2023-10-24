document.addEventListener("DOMContentLoaded", function () {
    const headerMobileButton = document.querySelector(".header__mobile-button");
    const mobuleMenu = document.querySelector(".mobile-menu");
    const headerBurgerIcon = document.querySelector(".header__burger-icon");
    const headerCloseIcon = document.querySelector(".header__close-icon");
    const body = document.querySelector("body");

    const mobuleMenuClassList = mobuleMenu.classList;
    const headerBurgerIconClassList = headerBurgerIcon.classList;
    const headerCloseIconClassList = headerCloseIcon.classList;
    const bodyClassList = body.classList;

    const VISIBLE_CLASS = "visible"
    const HIDDEN_CLASS = "hidden"

    function closeMobileMenu() {
        mobuleMenuClassList.remove(VISIBLE_CLASS);
        headerBurgerIconClassList.add(VISIBLE_CLASS);
        headerCloseIconClassList.remove(VISIBLE_CLASS);
        bodyClassList.remove(HIDDEN_CLASS);
    }

    function openMobileMenu() {
        mobuleMenuClassList.add(VISIBLE_CLASS);
        headerBurgerIconClassList.remove(VISIBLE_CLASS);
        headerCloseIconClassList.add(VISIBLE_CLASS);
        bodyClassList.add(HIDDEN_CLASS);
    }

    headerMobileButton.addEventListener("click", function () {
        if (mobuleMenu.classList.contains(VISIBLE_CLASS)) {
            closeMobileMenu();
        }
        else {
            openMobileMenu();
        }
    })

})