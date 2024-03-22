const links = document.querySelectorAll(".links__item h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});

const burgir = document.querySelector(".burgir__menu");
const headerA = document.querySelector(".header__action");


burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    headerA.classList.toggle("open");
});
const menuItems = document.querySelectorAll("#menu li");
const contentContainers = document.querySelectorAll('[class^="faq-menu"]');

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    contentContainers.forEach((container) => {
      container.style.display = "none";
    });
    contentContainers[index].style.display = "block";

    menuItems.forEach((item) => {
      item.classList.remove("active-menu");
    });

    menuItem.classList.add("active-menu");
  });
});

const dropdown = document.querySelectorAll(".dropdownItem");
dropdown.forEach((dropdowns) => {
  dropdowns.addEventListener("click", () => {
    dropdowns.classList.toggle("active");
  });
});
