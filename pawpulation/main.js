
document.querySelector('#saveFile').addEventListener('change',(e)=>{
    const file = document.querySelector('#saveFile').files[0];
    const imageType = /image.*/;

    if (file.type.match(imageType)) {
        const reader = new FileReader();

        reader.onload = function(e) {
            document.querySelector('.convertImg').innerHTML = "";

            const picture = document.createElement('picture');
            picture.id = 'pictures';
            const img1 = document.createElement('img');
            img1.src = reader.result;
            img1.id='uploadedPhoto';
            const img2 = document.createElement('img');
            img2.src = './cat4.png';
            img2.id='pawpulation';
            picture.appendChild(img1);            
            picture.appendChild(img2);            

            document.querySelector('.convertImg').appendChild(picture);
        }
        reader.readAsDataURL(file);	
    } else {
        fileDisplayArea.innerHTML = "File not supported!"
    }
})




document.querySelector('.btn-convert').addEventListener('click',(e)=>{

    const img1 = new Image();
    const img2 = new Image();
    img2.id = 'logo';

    let init =()=>{
        img1.src = document.getElementById('uploadedPhoto').src;
        img2.src = document.getElementById('pawpulation').src;
        window.requestAnimationFrame(draw);
    }

    let draw=()=>{
        let textColor = document.querySelector('#textcolor').value;
        let bgColor = document.querySelector('#bgcolor').value;
        let fontType = document.querySelector('#fontType').value;
        let fontSize = document.querySelector('#fontSize').value;
        let fontWeight = document.querySelector('#fontWeight').value;

        let ctx = document.querySelector('.canvas').getContext('2d');
        ctx.fillRect(0,0,500,500);
        ctx.drawImage(img1, 30, 30, 440, 380);
        ctx.drawImage(img2,30,400,440,100);
        // tempCtx.globalCompositeOperation = 'lighten';
        ctx.fillStyle = bgColor;
        
        
        let topText = document.querySelector('#topText').value.toUpperCase();
        let bottomText = document.querySelector('#bottomText').value.toUpperCase();
        ctx.font = `${fontSize}px ${fontType}`;
        ctx.textAlign = 'center';
        ctx.strokeStyle = textColor;
        ctx.lineWidth = fontWeight;

        ctx.strokeText(topText,250,80);
        ctx.strokeText(bottomText,250,375);
        window.requestAnimationFrame(draw);
    }
    init();


})

// Convert canvas to image
document.querySelector('.downloadTag').addEventListener("click", function(e) {
    const canvas = document.querySelector('.canvas');
    const dataURL = canvas.toDataURL("image/png", 1.0);


    downloadImage(dataURL, 'meme.png');
});

// Save | Download image
function downloadImage(data, filename = 'untitled.png') {
    const a = document.querySelector('.downloadTag');
    a.href = data;
    // a.download = filename;
    // document.body.appendChild(a);
    // a.click();
}