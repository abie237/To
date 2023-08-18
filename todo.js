  const input  = document.getElementById('input-box');
  const task_list = document.getElementById("list-container");

function add_task(){
    if (input.value === "" ){
        alert("You must type something")
    } else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        task_list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
  }
  

  task_list.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
  }, false);

function saveData(){
    localStorage.setItem('data', task_list.innerHTML); 
}