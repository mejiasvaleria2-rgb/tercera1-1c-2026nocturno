console.log("Hamburger icon cargado correctamente");

if (!window.__hamburgerInit) {
    window.__hamburgerInit = true;

    const icon = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".menu-derecha");

    if (icon && menu) {
        icon.addEventListener("click", () => {
            menu.classList.toggle("menu-derecha-open");
        });
    }
}