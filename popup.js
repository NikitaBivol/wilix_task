const btn = document.querySelector('.button');
const modal = document.querySelector('.browser');
const closed = document.querySelector('.close-button');

btn.addEventListener('click', function () {
   modal.classList.add('opened');
}); 

closed.addEventListener('click', function(){
   modal.classList.remove('opened');
});

document.addEventListener('keydown', function (evt){
   if (evt.keyCode === 27) {
      if (modal.classList.contains('opened')) {
         evt.preventDefault();
         modal.classList.remove('opened')
      }
   }
});