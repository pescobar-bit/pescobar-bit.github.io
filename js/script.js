// 1) Definimos el menú principal del sitio con las páginas reales que existen en el proyecto.
// He actualizado los nombres de archivo para que coincidan con los nuevos HTML:
// - experiencia.html
// - qualificacions.html
// - habilitats.html
// Esto evita que el navegador falle al intentar abrir una ruta que ya no existe.
const navigationItems = [
  { href: "index.html", label: "Em Presento" },
  { href: "experiencia.html", label: "Experiencia laboral" },
  { href: "qualificacions.html", label: "Qualificacions" },
  { href: "habilitats.html", label: "Hard Skills/Soft Skills" },
  { href: "contacte.html", label: "Envia'm l'oferta aqui" }
];

// 2) Localizamos el contenedor del nav en cada página.
// Este elemento se usa como punto de inserción para crear el menú dinámicamente.
const navigation = document.querySelector("#site-navigation");

// 3) Si el elemento existe, generamos la estructura del menú con JavaScript.
// Esto nos permite mantener el HTML más limpio y reutilizar siempre la misma lógica.
if (navigation) {
  // 3.1 Creamos la etiqueta <ul> que contendrá cada opción del menú.
  const list = document.createElement("ul");

  // 3.2 Comprobamos la página actual para saber qué enlace debe quedar resaltado.
  // Se compara la ruta actual con la ruta de cada enlace para detectar la sección activa.
  const currentPath = window.location.pathname;
  const currentPage = currentPath.endsWith("/") ? `${currentPath}index.html` : currentPath;

  // 3.3 Recorremos cada elemento del menú para crear su enlace y su item de lista.
  navigationItems.forEach(({ href, label }) => {
    const item = document.createElement("li");
    const link = document.createElement("a");

    // Convertimos la ruta relativa a una ruta absoluta para poder compararla bien con currentPage.
    const targetPage = new URL(href, window.location.href).pathname;

    // Establecemos el enlace y el texto visible para el usuario.
    link.href = href;
    link.textContent = label;

    // 3.4 Si la página actual coincide con este enlace, añadimos la clase 'active'.
    // Esta clase se usa luego en CSS para mostrar el enlace seleccionado como activo.
    if (targetPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }

    item.append(link);
    list.append(item);
  });

  // 3.5 Insertamos la lista completa dentro del nav.
  navigation.append(list);
}