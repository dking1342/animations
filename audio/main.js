
// y*2 + height = container height

// setInterval(()=>{

//     audioLine('.audio1');
//     audioLine('.audio2');
//     audioLine('.audio3');
//     audioLine('.audio4');
//     audioLine('.audio5');
//     audioLine('.audio6');
//     audioLine('.audio7');
//     audioLine('.audio8');
    
// }, 300);

const audioLine = (el) => {
    let height = Math.ceil(Math.random() * 350);
    let y = (500 - height) / 2;
    
    document.querySelector(el).setAttribute('height',height);
    document.querySelector(el).setAttribute('y',y);
}

