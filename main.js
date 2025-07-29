const myElement = document.createElement("div");
myElement.id = "container";
myElement.innerHTML = "<strong>My counter</strong>";
myElement.style.fontSize = "35px";
document.body.appendChild(myElement);

const h2 = document.createElement("h2");
h2.textContent = "0";
myElement.appendChild(h2);

const button1 = document.createElement("button");
button1.textContent = "Incrémenter +";
button1.style.color = "white";
button1.style.backgroundColor = "green";
button1.addEventListener("click", () => {
  h2.textContent = parseInt(h2.textContent) + 1;
});
myElement.appendChild(button1);

const button2 = document.createElement("button");
button2.textContent = "Décrémenter -";
button2.style.color = "white";
button2.style.backgroundColor = "red";
button2.addEventListener("click", () => {
  const compteur = parseInt(h2.textContent);
  if (compteur > 0) {
    h2.textContent = compteur - 1;
  }
});
myElement.appendChild(button2);

const button3 = document.createElement("button");
button3.textContent = "Reset";
button3.style.color = "white";
button3.style.backgroundColor = "blue";
button3.addEventListener("click", () => {
  h2.textContent = "0";
});
myElement.appendChild(button3);

