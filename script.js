"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
/*       
box.style.backgroundColor = 'blue';
box.style.width = '300px'; */

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

 */

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
/* wrapper.appendChild(div);
 *//* wrapper.prepend(div); */

/* hearts[1].before(div); */
/* hearts[1].after(div); */
/* wrapper.insertBefore(div, hearts[0]);
 *//* circle[0].remove(); */

/* hearts[0].replaceWith(circle[0]); */

div.innerHTML = '<a href="#">Hello world</a>';

/* div.textContent = "hello"; */

div.insertAdjacentHTML('afterend', "<h2>Hello</h2>");