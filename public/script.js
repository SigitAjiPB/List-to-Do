const inputTodo = document.getElementById('inputTodo');
const addTodo = document.getElementById('addTodo');
const todoContainer = document.getElementById('todoContainer');
const container = document.querySelector('.container');
const mainContainer = document.querySelector('.mainContainer');
const formInput = document.getElementById('formInput');

formInput.addEventListener('submit', function(e) {
    e.preventDefault();
});

addTodo.addEventListener('click', function(e){
    if (inputTodo.value != "") {
        displayTodo(inputTodo.value);
        inputTodo.value = "";
    }
});

function displayTodo(e) {
    let wrapperMain = document.createElement('div');
    wrapperMain.classList.add('wrapperMain');

    wrapperMain.innerHTML = `                <div id="listWrapper" class="mb-2 flex w-full gap-2 justify-between items-center">
    <div class="p-3 w-full bg-white rounded-lg hover:bg-slate-200 shadow-lg"><p class="max-w-none">${inputTodo.value}</p></div>
    <button class="h-12 w-12 deleteBtn rounded-lg bg-red-500 shadow-lg flex justify-center items-center hover:bg-red-600"><svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fffafa" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg></button>
</div>`;

    let deleteBtn = wrapperMain.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click',function(e) {
        wrapperMain.remove();
    });

todoContainer.appendChild(wrapperMain);
}
