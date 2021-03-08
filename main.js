import "./style.css";

function addTodoElement(title) {
  // Nous récupérons l'élément qui liste toutes les tâches
  const todoList = document.getElementById("todoList");
  const numberOfTodos = todoList.childElementCount;

  // Nous créons un nouvel élément qui va représenter notre tâche
  const element = document.createElement("div");
  element.classList.add("Todo__item");

  // Nous ajoutons le label à notre tâche
  const labelElement = document.createElement("label");
  labelElement.classList.add("Todo__item-label");
  labelElement.setAttribute("for", `todo-${numberOfTodos + 1}`);

  // Nous ajoutons un checkbox à notre tâche
  const checkboxElement = document.createElement("input");
  checkboxElement.classList.add("Todo__item-checkbox");
  checkboxElement.type = "checkbox";
  checkboxElement.id = `todo-${numberOfTodos + 1}`;

  labelElement.append(checkboxElement);

  // Nous ajoutons un titre à notre tâche
  const titleElement = document.createElement("span");
  titleElement.classList.add("Todo__item-title");
  titleElement.innerHTML = title;

  labelElement.append(titleElement);

  // Nous ajoutons le titre à notre tâche
  element.append(labelElement);

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
