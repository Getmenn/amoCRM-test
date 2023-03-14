const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {

  return (time) => {
    let minutes = 0;
    let hour = 0;
    let seconds = 0;
    
    const timer = setInterval(() => {
      
      hour = Math.trunc(time / 3600)
      minutes = Math.trunc((time - hour * 3600)/ 60 )
      seconds = Math.abs(Math.trunc(time - minutes * 60 - hour * 3600))

      if (time <= 0) {
        clearInterval(timer);
        timerEl.innerHTML = "Время закончилось";
      } else {
        let strTimer = `${hour}:${minutes}:${seconds}`;
        timerEl.innerHTML = strTimer;
      }
      time -= 1;
   }, 1000) 
  };
    
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9.]/g, ''); 
});

buttonEl.addEventListener('click', () => {
  const time = Number(inputEl.value);

  animateTimer(time);

  inputEl.value = '';
});
