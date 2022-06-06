const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaItemsEl = document.querySelector(".lista");
  const itemsEl = document.querySelectorAll(".lista li");

  for (const item of itemsEl) {
    item.remove();
  }

  for (const item of cosasQueAprendimos) {
    const nuevoLiEl = document.createElement("li");
    nuevoLiEl.textContent = item.tema;
    nuevoLiEl.classList.add(item.class || "item");
    listaItemsEl.appendChild(nuevoLiEl);
  }
}

main();
