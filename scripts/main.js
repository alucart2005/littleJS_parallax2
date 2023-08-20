const cards = document.querySelector('.cards')
  images = document.querySelectorAll('.card__img')
  backgrounds = document.querySelectorAll('.card__bg')
  range = 40;

// Mouse Events in relations of windows
const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);
let timeout
document.addEventListener('mousemove', ({ x, y }) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  timeout = window.requestAnimationFrame(()=>{
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);
    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
    [].forEach.call(images,(item)=>{
      item.style.transform=`translateX(${-xValue}px) translateY(${yValue}px)`
    });
    [].forEach.call(backgrounds, (item)=>{
      item.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`
    })
  })
},false)