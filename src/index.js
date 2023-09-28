document.addEventListener("DOMContentLoaded", () => {
    // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let taskValue= e.target.todo.value;
    // priority
    let task = document.getElementById("tasks")
    let li = document.createElement("li")
    li.textContent = `${taskValue}`
    let button = document.createElement("button")
    button.textContent="delete"
    button.addEventListener("click",(e)=>{
      e.target.parentNode.remove()
    })
    li.appendChild(button)
    console.log(task)
    task.appendChild(li)
    form.reset
  })
});
