const btn = document.querySelector('.button');
const modal = document.querySelector('.browser');
const closed = document.querySelector('.close-button');

btn.addEventListener('click', function () {
   modal.classList.add('opened');
}); 

closed.addEventListener('click', function(){
   modal.classList.remove('opened');
});