const colors = [
    {color: 'أحمر', id: 'red'},
    {color: 'أزرق', id: 'blue'},
    {color: 'أصفر', id: 'yellow'},
    {color: 'أخضر', id: 'green'}
];

const text = document.querySelector('h1.colorText');
const colorBtn = document.querySelectorAll('button.colorBox');
const score = document.querySelector('#score');
const bestScoreText = document.querySelector('#bestScore');
const loseBox = document.querySelector('div.loseBox');
const tryagainBtn = document.querySelector('#tryagainBtn');
const startBox = document.querySelector('div.startBox');
const startBtn = document.querySelector('#startBtn');
const timerBox = document.querySelector('div.timer');

let counter = 0;
let timer = 3;

score.textContent = counter;
bestScoreText.textContent = bestScore(counter);

textColorChange();

colorBtn.forEach((btn) => {
    btn.onclick = () => {
        if (btn.id == text.getAttribute('data-id')){
            counter++;
            textColorChange();
        } else {
            loseBox.classList.add('active');
            bestScore(counter);
            bestScoreText.textContent = bestScore(counter);
        }
    }
})

tryagainBtn.onclick = () => {
    location.reload();
}

startBtn.onclick = () => {
    startBox.classList.remove('active');
    clear = setInterval(() => {
        if (timer == 0){
            clearInterval(clear);
            loseBox.classList.add('active');
            bestScore(counter);
            bestScoreText.textContent = bestScore(counter);
        }
        timer--;
        timerBox.textContent = timer;
    }, 500)
}

function textColorChange(){
    let randomColor = Math.floor(Math.random() * 4);
    let randomText = Math.floor(Math.random() * 4);
    
    text.innerHTML = colors[randomText].color;
    text.style.color = colors[randomColor].id;
    text.setAttribute('data-id', colors[randomColor].id);

    score.textContent = counter;
    timer = 3;
    timerBox.textContent = timer;
}

function bestScore(x){
    if (localStorage.getItem('bestScrore') < x || localStorage.getItem('bestScrore') == undefined){
        localStorage.setItem('bestScrore', x);
        return localStorage.getItem('bestScrore');
    } else {
        return localStorage.getItem('bestScrore');
    }
}