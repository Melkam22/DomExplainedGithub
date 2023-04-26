// I
const showList = document.getElementById('showList');
const showAllList = showList.children;
const newItem = document.createElement('li');
newItem.textContent = 'four';

showList.appendChild(newItem);

//console.log(showList)
//
// II
const showNode = document.getElementById('showNode');
const showAllNode = showNode.childNodes;

const addSpan = document.createElement('span');
addSpan.textContent = 'this our span conent';
showNode.appendChild(addSpan);


//console.log(showAllNode)

// III create multiple lists
//IV Delete elements


const deleteElements = document.getElementById('dleteElements');
let myUl = document.getElementById('ul')
let myChild1 = deleteElements.getElementsByTagName('li')[0];
//const showContent = myChild1.textContent;
//const deletedElement = myUl.removeChild(myChild1);
//console.log(deletedElement);

// V delete upon click

// const delteBtn = document.getElementById('dltBtn');

// delteBtn.addEventListener('click', function(){
// const deleteElements = document.getElementById('dleteElements');
// let myUl = document.getElementById('ul')
// let myChild1 = deleteElements.getElementsByTagName('li')[0];
// const deletedElement = myUl.removeChild(myChild1);
// console.log(deletedElement)
// })
//
//
function dltBtn(){
const deleteElements = document.getElementById('dleteElements');
let myUl = document.getElementById('ul')
let myChild1 = deleteElements.getElementsByTagName('li')[0];
const deletedElement = myUl.removeChild(myChild1);
console.log(deletedElement)
}

























