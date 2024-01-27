let form = document.querySelector('form');
let input = document.querySelector('input');
let btn = document.querySelector('button');
let img = document.querySelector('img');
let size = document.querySelector('#size')
const fetchQR = async (e) =>{
    e.preventDefault();
    let f = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`);
   
    img.setAttribute('src',f.url);
    form.reset();
}

form.addEventListener('submit', fetchQR);