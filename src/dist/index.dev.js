"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // your code here
  var form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var taskValue = e.target.todo.value; // priority

    var task = document.getElementById("tasks");
    var li = document.createElement("li");
    li.textContent = "".concat(taskValue);
    var button = document.createElement("button");
    button.textContent = "delete";
    button.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
    li.appendChild(button);
    console.log(task);
    task.appendChild(li);
    form.reset;
  });
});