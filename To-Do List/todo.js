function handleCost(event)
{
  if(event.key === 'Enter')
  {
      add();
      print();
  }
}

const arr = [{
  name: '',
  dueDate: ''
}];

function add()
{
  const inputname = document.querySelector('.input-name');
  const inputdate = document.querySelector('.due-date');

  const name = inputname.value;
  const dueDate= inputdate.value;

  arr.push({
      name,
      dueDate
  });

  inputname.value = '';
  inputdate.value = '';

  print();
}

function print()
{
  let todoListHTML = '';
  for(let i=1; i<arr.length; i++){
      const todoObj = arr[i];
      const { name, dueDate } = todoObj;
      
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
      arr.splice(${i}, 1);
      print();
      "
      class="delete-button">
          Delete
      </button>`;
      todoListHTML += html;
  }
  document.querySelector('.todo-list').innerHTML = todoListHTML;
}
