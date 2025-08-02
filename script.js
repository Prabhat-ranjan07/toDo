let todoList = [
  {
    item:'',
    dueDate:''
  },
];
displayItems();

function addtodo(){
  let inputElement = document.querySelector('#todo-input'); 
  let dateElement = document.querySelector('#todo-date'); 
  let todoItems =inputElement.value;
  let todoDate =dateElement.value;
  todoList.push({item:todoItems,dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';

  displayItems();
}
function displayItems() {
 let containerElement = document.querySelector('#todo-container');
let newHtml='';
 for(let i=0;i<todoList.length;i++){
 let {item, dueDate} = todoList[i];
     newHtml+=`
      <span id="item">${item}</span>
      <span id="date">${dueDate}</span>
      <button class="delete-button"onclick="todoList.splice(${i},1);
      displayItems(); ">Delete</button>
     `; 

  }
   containerElement.innerHTML=newHtml;



   

 
}