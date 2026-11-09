const navigationItems = [
  { href: "index.html", label: "Em Presento" },
  { href: "llocs.html", label: "Exepriencia laboral" },
  { href: "plats.html", label: "Qualificacions" },
  { href: "galeria.html", label: "Hard Skills/Soft Skills" },
  { href: "contacte.html", label: "Envia'm l'oferta aqui " }
];

const navigation = document.querySelector("#site-navigation");

if (navigation) {
  const list = document.createElement("ul");
  const currentPath = window.location.pathname;
  const currentPage = currentPath.endsWith("/") ? `${currentPath}index.html` : currentPath;

  navigationItems.forEach(({ href, label }) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    const targetPage = new URL(href, window.location.href).pathname;

    link.href = href;
    link.textContent = label;

    if (targetPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }

    item.append(link);
    list.append(item);
  });

  navigation.append(list);
}