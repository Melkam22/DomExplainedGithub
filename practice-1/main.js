// I
const myMain = document.getElementById('main');
const h1 = document.querySelector('#h1');
//const ul = document.querySelector('.ul');
const ul = document.getElementById('ul');

//console.log(myMain);
// let one = myMain.children;
// let two = myMain.childNodes;
// console.log(one.length)
// console.log(two.length);

// II

// const show1 = myMain.children[1];//selecting the ul
// const show2 = myMain.firstElementChild;
// const show3 = myMain.lastElementChild;
// const show4 = h1.nextElementSibling;
// const show5 = ul.previousElementSibling;
// const show6 = ul.parentNode;

// console.log(show6);

// III
// other way of selecting ...
const showAll = myMain.children;
const select1 = showAll[1]
//console.log(select1);
//
//for loop
//for(let i=0; i<=showAll.length; i++){
    //console.log(showAll[i]);
//}
//
 
// const showAll1 = ul.children;

// for(let i=0; i<=showAll1.length; i++){
//     console.log(showAll1[i]);
// }

// IV
//get content of each element/grand-children

const showUl = myMain.lastElementChild;
const showLi = ul.children;
const firstLi0 = showLi[0].innerHTML;
const firstLi1 = showLi[1].innerText;
const firstLi2 = showLi[2].textContent;
const firstLi3 = showLi[3].textContent.toUpperCase();

console.log(firstLi3);
















