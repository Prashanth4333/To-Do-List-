const input = document.querySelector("input") // input task 
const button = document.querySelector("#button") // add new task
const todos = document.querySelector(".todos")  // list of task added
const newTaskInput = document.querySelector("#block input")

const addTask = () => {
   const taskName = input.value.trim();
   if (!taskName) {
      setTimeout(() => {
         error.style.display = "block";
      }, 200);
      return;
   }


   const task = `<div class="task">
    <input type="checkbox" class= "task-check"> 
    <span class="taskname">${taskName}</span>
    <button class="edit">
    <img src="https://img.icons8.com/?size=100&id=6rM43YNMgkta&format=png&color=000000">
    </button>
    <button class="delete">
    <img src="https://img.icons8.com/?size=100&id=Z1uq6OhA7KYK&format=png&color=000000">  
    </button>
 </div>`

   todos.insertAdjacentHTML
      ("beforeend", task);

   const deleteButtons = document.querySelectorAll(".delete")
   deleteButtons.forEach((button) => {
      button.onclick = () => {
         button.parentNode.remove()
      }
   })

   const editButtons = document.querySelectorAll(".edit")
   editButtons.forEach((editBtn) => {
      editBtn.onclick = (e) => {
         let targetElement = e.target;
         if (!(e.target.className == "edit")) {
            targetElement = e.target.parentElement;
         }
         newTaskInput.value = targetElement.previousElementSibling?.innerText;
         targetElement.parentNode.remove()
      }
   })
   const tasksCheck = document.querySelectorAll(".task-check")
   tasksCheck.forEach((checkBox) => {
      checkBox.onChange = () => {
         checkBox.nextElementSibling.classList.toggle("completed")
      }
   })
   newTaskInput.value = ""
};

input.addEventListener('keypress', function (e) {
   if (e.key === 'Enter') {
      addTask()
   }
});
button.addEventListener("click", addTask)