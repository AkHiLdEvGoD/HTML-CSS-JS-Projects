const btn = document.querySelector(".btn")
const input = document.querySelector(".inp")
const taskbox = document.querySelector(".tasks")
let countTask=0;

function displayCount(count){
    document.querySelector('.count').innerHTML=`${count}`;
}

function addTask() {
    const task_value = input.value;
    if (!task_value) {
        alert("Add 1 task atleast!")
    }
    else {
        countTask+=1
        displayCount(countTask)
        taskbox.style.display = "block"
        const task = document.createElement('div');
        task.id = "tk";
        task.innerHTML = `
                        <input type="checkbox" id="check" class="task-check">
                        <p>${task_value}</p>
                        <button id="tk-btn" class="edit">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button id="tk-btn" class="delete">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        `
        taskbox.appendChild(task)

        const deleteButtons=document.querySelectorAll('.delete')
        deleteButtons.forEach((button)=>{
            button.onclick=()=>{
                button.parentNode.remove();
                countTask-=1
                displayCount(countTask)
            }
        })

        const editButtons=document.querySelectorAll('.edit')
        editButtons.forEach((button)=>{
            button.onclick=(e)=>{
                let targetElement=e.target;
                if(!(e.target.className=='edit')){
                    targetElement=e.target.parentElement;
                }
                task_value.value=targetElement.previousElementSibiling?.innerText;
                targetElement.parentNode.remove();
                countTask-=1;
                displayCount(countTask)
            }
        })

        const checkbox=document.querySelectorAll('.task-check');
        checkbox.forEach((check)=>{
            check.onchange=()=>{
                check.nextElementSibling.classList.toggle("completed")
                if(check.checked){
                    countTask-=1;
                }
                else{
                    countTask+=1;
                }
                displayCount(countTask)
            }
        })
        input.value="";
    }
    
}
if(countTask==0){
    taskbox.style.display="none"
}
btn.addEventListener('click',addTask)

window.onload=()=>{
    countTask=0;
    displayCount(countTask)
    input.value="";
}
