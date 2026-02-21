const ADD_TASKS = JSON.parse(localStorage.getItem("my_task")) || []; // storage of my my array if task. empty at this point

const ADD_button = document.querySelector('.USER_INPUT button');

ADD_button.addEventListener('click', CLICK_TO_ADD_NEW_TASKS);

function CLICK_TO_ADD_NEW_TASKS(){

  const input = document.querySelector('.USER_INPUT input');


  const TASKS = input.value;

      if(TASKS == ""){
    alert("INVALID TASK !❌❌ ");
    return;
  }


  ADD_TASKS.push(TASKS);     // tasks pushed into array but not stored

  localStorage.setItem("my_task", JSON.stringify(ADD_TASKS));  // NOW THE ELEMENTS WILL BE STORED IN THE LOCAL STORAGE 




  console.log(ADD_TASKS);

  input.value = "";

  render_tasks();

}
function DELETE_BUTTON(INDEX){
  ADD_TASKS.splice(INDEX , 1);
  localStorage.setItem("my_task", JSON.stringify(ADD_TASKS));  //SIMILARLY HERE TOO, AFTER DELETION VALUE WILL BE STORED
  render_tasks();
}

function render_tasks(){
    
    const my_tasks_content = document.querySelector('.content_box');
    my_tasks_content.innerHTML = "";

    for(let i = 0 ; i < ADD_TASKS.length ; i++ ){

      my_tasks_content.innerHTML += "<h4> TASK "+(i+1)+ ":" +ADD_TASKS[i]+" "+"<button class = 'deleeete' onclick = 'DELETE_BUTTON("+i+")'>"+"❌"+"</button>"+"</h4>"
  }

}