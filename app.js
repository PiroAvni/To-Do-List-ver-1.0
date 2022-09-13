const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');


// html template for the todo
const generateTemplate = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `;

        // adding the html to the list
        list.innerHTML += html;
};

const filterTodos = (term) => {

    // add filtered class
    Array.from(list.children) // array
      .filter(todo => !todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.add('filtered'));
  
    // remove filtered class
    Array.from(list.children)
      .filter(todo => todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.remove('filtered'));
    
      console.log(term)
      console.log(list.children)
  };

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo)

    // check the input has length, if true the function is called - will not add empty input 
    if(todo.length){
      generateTemplate(todo); 
      // resets the input field in the form after the functionis called
      addForm.reset();
    }
   

});

// delete todos - adding an event listerner to the list
list.addEventListener('click', e =>{
    // check if the target clicked contains delete class for the trash can
    if(e.target.classList.contains('delete')){
        // deletes the parent element - targeting the <li> tag and removes
        e.target.parentElement.remove();
    }
});



// filter todos event
search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filterTodos(term);
  
  });
