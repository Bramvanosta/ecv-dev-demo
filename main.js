import "./style.css";

function getTodosFromLocalStorage() {
  const todoElements = localStorage.getItem("todoElements");

  if (todoElements) {
    return JSON.parse(todoElements);
  }

  return [];
}

function toggleTodoStatus(id) {
  const todoElements = getTodosFromLocalStorage();

  todoElements.forEach((item) => {
    if (item.id === id) {
      item.done = !item.done;
    }
  });

  localStorage.setItem("todoElements", JSON.stringify(todoElements));
}

function deleteTodo(id) {
  document.getElementById(`todo-${id}`).remove();

  let todoElements = getTodosFromLocalStorage();

  todoElements = todoElements.filter((item) => {
    if (item.id === id) {
      return false;
    }

    return true;
  });

  localStorage.setItem("todoElements", JSON.stringify(todoElements));
}

function addTodoElementToLocalStorage(id, title, done) {
  const todoElements = getTodosFromLocalStorage();

  todoElements.push({ id, title, done });

  localStorage.setItem("todoElements", JSON.stringify(todoElements));
}

function addTodoElement(id, title, done) {
  // Nous récupérons l'élément qui liste toutes les tâches
  const todoList = document.getElementById("todoList");

  // Nous créons un nouvel élément qui va représenter notre tâche
  const element = document.createElement("div");
  element.classList.add("Todo__item");
  element.id = `todo-${id}`;

  // Nous ajoutons le label à notre tâche
  const labelElement = document.createElement("label");
  labelElement.classList.add("Todo__item-label");
  labelElement.setAttribute("for", `todo-${id}-input`);

  // Nous ajoutons un checkbox à notre tâche
  const checkboxElement = document.createElement("input");
  checkboxElement.classList.add("Todo__item-checkbox");
  checkboxElement.type = "checkbox";
  checkboxElement.id = `todo-${id}-input`;

  if (done) {
    checkboxElement.checked = true;
  }

  // Nous ajoutons un évènement pour gérer le changement de statut de la tâche
  checkboxElement.addEventListener("change", () => toggleTodoStatus(id));

  labelElement.append(checkboxElement);

  // Nous ajoutons un titre à notre tâche
  const titleElement = document.createElement("span");
  titleElement.classList.add("Todo__item-title");
  titleElement.innerHTML = title;

  labelElement.append(titleElement);

  // Nous ajoutons le titre à notre tâche
  element.append(labelElement);

  // Nous ajoutons un bouton de suppression de la tâche
  const deleteElement = document.createElement("button");
  deleteElement.classList.add("Todo__item-delete");
  deleteElement.innerHTML = "Supprimer";

  deleteElement.addEventListener("click", () => deleteTodo(id));

  element.append(deleteElement);

  // Nous ajoutons la nouvelle tâche dans la liste des tâches
  todoList.append(element);
}

document.getElementById("todoAdd").addEventListener("submit", (event) => {
  event.preventDefault();

  // Nous récupérons la valeur que nous avons saisi
  const title = document.getElementById("todoTitle").value;

  const todoList = document.getElementById("todoList");
  const numberOfTodos = todoList.childElementCount;
  const id = numberOfTodos + 1;

  // Nous appelons la fonction qui ajoute une nouvelle tâche à la liste
  addTodoElement(id, title, false);

  // Nous ajoutons la nouvelle tâche au localStorage
  addTodoElementToLocalStorage(id, title, false);

  // Nous réinitialisons le titre
  document.getElementById("todoTitle").value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const todoElements = getTodosFromLocalStorage();

  todoElements.forEach((item) => {
    addTodoElement(item.id, item.title, item.done);
  });
});
