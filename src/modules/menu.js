import menuImg from "../assets/menu.jpg";

import restaurantMenu from "./restaurantMenu";

export default function renderMenu() {
    const menuSection = document.createElement("section");

    menuSection.className = "bg-gradient-to-b from-red-950 from-5% to-red-500 to-100% min-h-screen text-gray-100 text-xl block pt-16";
    menuSection.id = "menu";

    const imgContainer = document.createElement("div");
    imgContainer.className = "h-screen sm:h-[50vh] w-full relative";
    
    const img = new Image();
    img.src = menuImg;
    img.className = "shadow-md shadow-black h-full w-full object-cover brightness-[0.2] grayscale";
    img.alt = "Close-up of Menu - By Terje Sollie";

    imgContainer.appendChild(img);
    const sectionHeading = document.createElement("h1");
    
    sectionHeading.className = "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-5xl font-semibold text-center w-fit p-4 mx-auto bg-slate-900 bg-opacity-70 rounded-lg shadow-lg shadow-gray-900";
    sectionHeading.textContent = "Our Menu";
    imgContainer.appendChild(sectionHeading);

    menuSection.appendChild(imgContainer);

    const menuGrid = document.createElement("div");
    menuGrid.className = "grid grid-cols-1 lg:grid-cols-3";

    for (const category of restaurantMenu) {
        const catContainer = document.createElement("div");
        catContainer.classList.add("menu-category");

        const catHeading = document.createElement("h2");
        catHeading.innerHTML = `<span class="${category.icon}"></span>${category.category}`;
        catContainer.appendChild(catHeading);

        const menuItemsContainer = document.createElement("div");
        menuItemsContainer.classList.add("menu-container");

        for (const item of category.categoryItems) {
            const menuCard = document.createElement("div");
            menuCard.classList.add("menu-card");

            const menuHeading = document.createElement("h3");
            menuHeading.textContent = item.itemName;
            menuCard.appendChild(menuHeading);

            const menuContent = document.createElement("p");
            menuContent.textContent = item.itemDesc;
            menuCard.appendChild(menuContent);

            menuItemsContainer.appendChild(menuCard);
        }
        catContainer.appendChild(menuItemsContainer);
        menuGrid.appendChild(catContainer);
    }
    menuSection.appendChild(menuGrid)
    document.getElementById("content").appendChild(menuSection);
}