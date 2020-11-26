
// let d = document.querySelector('path').getAttribute('d');
// console.log(d);
// setTimeout(() => {
//     document.querySelector('path').setAttribute('d',"M0,0 L200,0 C 200,200 400,0 300,300 L0,200 Z");
// }, 1000);
// setTimeout(() => {
//     document.querySelector('path').setAttribute('d',"M0,0 L200,0 C 200,200 500,0 200,300 L0,100 Z");
// }, 1200);

setInterval(()=>{
    document.querySelector('.pepsiTop1').setAttribute('d',"M113,171 C170,76 324,48 396,193 C315,158 288,172 255,176 S175,205 113,171 ");
},1000)
setTimeout(() => {
    setInterval(()=>{
        document.querySelector('.pepsiTop1').setAttribute('d',"M113,171 C170,76 324,48 396,193 C365,198 305,213 255,176 S155,145 113,171 ");
    },1000)
}, 500);

setInterval(()=>{
    document.querySelector('.pepsiBot1').setAttribute('d',"M102,303 C120,386 287,475 385,326 C325,288 255,324 245,321 S159,346 102,302 ");
},1000)
setTimeout(() => {
    setInterval(()=>{
        document.querySelector('.pepsiBot1').setAttribute('d',"M102,303 C120,386 287,475 385,326 C295,378 270,324 255,321 S225,286 102,302 ");
    },1000)
}, 500);