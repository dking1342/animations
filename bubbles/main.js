


for (let i = 0; i < 3000; i++) {
  let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  circle.setAttribute('cx',Math.ceil(Math.random()*2500));
  circle.setAttribute('cy',Math.ceil(Math.random()*2500));
  circle.setAttribute('r',75);
  circle.setAttribute('fill','rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')');
  circle.setAttribute('fill-opacity','0.5')
  circle.setAttribute('stroke','rgba(0,0,0,0.05)');
  circle.setAttribute('class','bubbles');
  document.querySelector('#triangle-bg').appendChild(circle);
}
