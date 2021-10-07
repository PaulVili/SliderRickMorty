const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
const pg = document.querySelectorAll('.pg');
let move = 0;
    
fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json();
  })
  .then((slide) => {
    slide.results.forEach((slide=>{
      "" == slide.type && (slide.type='Нет типа'),
        slider.innerHTML += `
        \n <div class="slide">
            \n <img src="${slide.image}" alt="">
            \n <div class="slideText">
                \n <p>${slide.name}</p>
                \n <p>${slide.species}</p>
                \n <p>${slide.type}</p>
                \n <p>${slide.status}</p>
                </div>
            </div> `
    }))
  });

btnLeft.addEventListener("click", () => {
    if(move < 1){
        move = 9;
    }
    move--
    slider.style.transform = `translateX(${-100*move}vw)`;
    step()
})

btnRight.addEventListener("click", () => {
    if(move> 7){
        move = -1;
    }
    move++
    slider.style.transform = `translateX(${-100*move}vw)`;
    step()
})

setInterval(() => {
    if(move> 7){
        move = -1;
    }
    move++
    slider.style.transform = `translateX(${-100*move}vw)`;
    step()
}, 4000)
step()
function step() {
  pg.forEach( (elem, i) => {
    if(move == i){
      elem.classList.add('pgActive')
    }   else{
      elem.classList.remove('pgActive')
    }
  });
  console.log(move)
}