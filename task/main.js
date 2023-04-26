const addContent = document.getElementById('addContent');
const showTask = document.getElementById('showTask');
const addTaskBtn = document.getElementById('addTask');
//const dltTaskBtn = document.getElementById('deleteTask');

// show list from addContent
const showList = addContent.children;
//console.log(showList)

//add p function

addTaskBtn.addEventListener('click', function(){
    const createP = document.createElement('p');
    createP.textContent = 'walk the dog';
    showTask.appendChild(createP)
    const result = showTask.children
    addContent.value = '';
    console.log(result)
})

//delte p function

function dltBtn(){
    const showTask = document.getElementById('showTask');
    let createdChild = showTask.getElementsByTagName('p')[0];
    showTask.removeChild(createdChild)
//console.log(createdChild)
}

// add content on DOM from input

function addFunc(){
    //console.log('clicked')
    showTask.innerHTML = addContent.value;
    //console.log(result)
}










