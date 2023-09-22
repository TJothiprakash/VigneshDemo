



const imgContainer = document.querySelector('.img-container');

const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');

let x = 0;
let timer;

prevEl.addEventListener('click',()=>{
x +=45;
clearTimeout(timer);
  updateGallery();
});


function updateGallery(){
    imgContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(()=>{
        x=x-45;
        clearTimeout(timer);

        updateGallery();
    },10000);


}

nextEl.addEventListener('click', () => {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
});






