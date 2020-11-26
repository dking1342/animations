
// document.querySelector('.mouth').setAttribute('d','M180,215 L130,170 A70,70 0 0,1 130,170 Z');

setTimeout(() => {
    document.querySelector('.mouth').setAttribute('d','M180,215 L110,215 A70,70 0 0,1 180,150 Z');    
    console.log(document.querySelector('.mouth').getAttribute('d'));
}, 500);

setInterval(() => {
    document.querySelector('.mouth').setAttribute('d','M180,215 L130,170 A70,70 0 0,1 130,170 Z');    
}, 500);

setInterval(() => {
    document.querySelector('.mouth').setAttribute('d','M180,215 L110,215 A70,70 0 0,1 180,150 Z');    
}, 1000);

