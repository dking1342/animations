// Variables



// Events



// Functions

const star = () => {
  let randTop = Math.random().toFixed(2)*100+0.1;
  let randLeft = Math.random().toFixed(2)*100+0.1;
  let div = document.createElement('div');
  div.className = 'star';
  div.style.top=`${randTop}%`;
  div.style.left= `${randLeft}%`;
  document.querySelector('.stars').appendChild(div);
}


for (var i = 0; i < 50; i++) {
  star()
}
