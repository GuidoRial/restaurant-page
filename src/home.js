import { createText } from "./createText";
import myImage from "./pizza-chef.jpg";

export function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const pizzaChef = document.createElement("img");
  pizzaChef.src = myImage;

  home.appendChild(createText("The best pizza place in town"));
  home.appendChild(pizzaChef);
  home.appendChild(createText("Don't miss out on us, we're pretty cool"));
  home.appendChild(createText("(unlike our pizzas)"));
  home.appendChild(createText("+54 9 341-549-4538"));

  container.appendChild(home);
}
