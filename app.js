/*var selectedItem;

function addToList(btn) {
  var todoList = document.querySelector("#todolist").value;

  if (btn.value == "Add") {
    var todoItem = document.createElement("tr");

    var todoCell = document.createElement("td");
    var todoValue = document.createTextNode(todoList);
    todoCell.appendChild(todoValue);

    var editLink = document.createElement("a");
    editLink.innerHTML = "✏️";
    editLink.href = "#";
    editLink.onclick = function () {
      editItem(todoItem);
    };

    var separator = document.createTextNode(" | ");

    var deleteLink = document.createElement("a");
    deleteLink.innerHTML = "🗑️";
    deleteLink.href = "#";
    deleteLink.onclick = function () {
      deleteItem(todoItem);
    };

    var checkBoxCell = document.createElement("td");
    checkBoxCell.innerHTML =
      "<input type='checkbox' onclick='checkItem(this)'>";

    var optionCell = document.createElement("td");
    optionCell.appendChild(editLink);
    optionCell.appendChild(separator);
    optionCell.appendChild(deleteLink);

    todoItem.appendChild(checkBoxCell);
    todoItem.appendChild(todoCell);
    todoItem.appendChild(optionCell);

    document.getElementById("table").appendChild(todoItem);
  } else {
    selectedItem.childNodes[1].innerHTML = todoList;
    selectedItem.style.backgroundColor = "white";
  }
}

function checkAll(check) {
  var table = document.querySelector("#table");

  if (check.checked)
    for (var i = 1; i < table.childNodes.length; ++i)
      //childNodes = rows
      table.childNodes[i].childNodes[0].childNodes[0].checked = "checked";
  else
    for (var i = 1; i < table.childNodes.length; ++i)
      table.childNodes[i].childNodes[0].childNodes[0].checked = "";
}

function editItem(todoItem) {
  selectedItem = todoItem;
  document.getElementById("button").value = "Modify";
  document.getElementById("todoList").value = todoItem.childNodes[1].innerHTML;
}

function deleteItem(todoItem) {
  document.querySelector("#table").removeChild(todoItem);
}

function checkItem(item) {
  var table = document.getElementById("table");
  var checkbox = document.getElementById("checkbox");
  var boxes = table.getElementsByTagName("input");

  if (!item.checked) {
    checkbox.checked = "";
  } else {
    for (var i = 1; i < boxes.length; ++i) {
      if (boxes[i].checked) continue;
      else break;
    }
  }
  if (i == boxes.length) {
    checkbox.checked = "checked";
  }
}

function deleteItems() {
  var table = document.getElementById("table");
  var boxes = table.getElementsByTagName("input");

  for (var i = 1; i < boxes.length; ++i) {
    if (boxes[i].checked) table.removeChild(boxes[i].parentNode.parentNode);
    else ++i;
  }
}

function listNumber() {
  var table = document.getElementById("table");
  var lists = table.childNodes[1];

  return document.getElementById("p").innerHTML = `You have "${lists.length}" works to do :)`;
  for (var i = 1; i < lists.length; ++i) {
    if (lists.length == 0) {
      return "You have nothing to do :(";
    } else {
      return "You have" + lists.length + "works to do :)";
    }
  }
}*/
/*const container = document.querySelector("#task-container").value;

window.localStorage.setItem("container", JSON.stringify(container));
console.log(localStorage)*/

window.addEventListener("load", () => {
  const button = document.querySelector("#addButton");
  const task = document.querySelector("#addTask");
  const container = document.querySelector("#task-container");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const text = task.value;

    if (!text) {
      alert("Please fill out the task!");
      return;
    }

    const newTask = document.createElement("div");
    newTask.classList.add("tasks");

    const newContent = document.createElement("div");
    newContent.classList.add("content");

    const newInput = document.createElement("input");
    newInput.classList.add("text");
    newInput.type = "text";
    newInput.value = task.value;
    newInput.setAttribute("readonly", "readonly");

    const newEdit = document.createElement("input");
    newEdit.classList.add("edit");
    newEdit.value = "Edit";
    newEdit.type = "button";

    const newDelete = document.createElement("input");
    newDelete.classList.add("delete");
    newDelete.value = "Delete";
    newDelete.type = "button";

    newTask.appendChild(newContent);
    newContent.appendChild(newInput);

    newContent.appendChild(newEdit);
    newContent.appendChild(newDelete);

    container.appendChild(newTask);

    newEdit.addEventListener("click", () => {
      if (newEdit.value == "Edit") {
        newInput.removeAttribute("readonly");
        newInput.focus();
        newEdit.value = "Save";
      } else {
        newInput.setAttribute("readonly", "readonly");
        newEdit.value = "Edit";
      }
    });

    newDelete.addEventListener("click", () => {
      container.removeChild(newTask)
    })
  });
});
