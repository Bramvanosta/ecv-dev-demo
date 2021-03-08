import "./style.css";

function addTodoElement(title) {
  // Nous récupérons l'élément qui liste toutes les tâches
  const todoList = document.getElementById("todoList");

  // Nous créons un nouvel élément qui va représenter notre tâche
  const element = document.createElement("div");
  element.classList.add("Todo__item");

  // Nous ajoutons un titre à notre tâche
  const titleElement = document.createElement("div");
  titleElement.classList.add("Todo__item-label");
  titleElement.innerHTML = title;

  // Nous ajoutons le titre à notre tâche
  element.append(titleElement);

  // Nous ajoutons la nouvelle tâche dans la liste des tâches
  todoList.append(element);
}

document.getElementById("todoAdd").addEventListener("submit", (event) => {
  event.preventDefault();

  // Nous récupérons la valeur que nous avons saisi
  const title = document.getElementById("todoTitle").value;

  // Nous appelons la fonction qui ajoute une nouvelle tâche à la liste
  addTodoElement(title);

  // Nous réinitialisons le titre
  document.getElementById("todoTitle").value = "";
});
