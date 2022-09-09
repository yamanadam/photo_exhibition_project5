const panels = document.querySelectorAll(".panel");
console.log(panels); //[div.panel.active, div.panel, div.panel, div.panel, div.panel]

console.log(panels[0]);

panels.forEach((p) => {
  p.addEventListener("click", () => {
    removeActiveClasses();
    p.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((p) => {
    p.classList.remove("active");
  });
};
