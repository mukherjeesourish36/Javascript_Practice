const body = document.querySelector('body');
const btn = document.querySelectorAll('.button');
btn.forEach((b) => {
  b.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
