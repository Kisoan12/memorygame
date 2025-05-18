const container = document.getElementById("box-container");

for (let i = 0; i <= 24; i++) {
  const box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
}
