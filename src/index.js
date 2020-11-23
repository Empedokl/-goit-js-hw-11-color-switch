import './styles.css';
const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const ref = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector("body"),
  };
  
  const getThems = {
    intervalid: null,
    start() {
      ref.btnStart.disabled = true;
      this.intervalid = setInterval(() => {
        ref.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
      }, 1000);
    },
    stop() {
      clearInterval(this.intervalid);
      ref.btnStart.disabled = false;
      this.intervalid = null;
    },
  };
  
  ref.btnStart.addEventListener("click", getThems.start.bind(getThems));
  ref.btnStop.addEventListener("click", getThems.stop.bind(getThems));