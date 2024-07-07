let button = document.getElementById('btnn');
let cross = document.querySelector('.cross');
let hardBtn = document.getElementById('hardbtn');

function updateCountdown() {
  const targetDate = new Date('2043-04-14T00:00:00');
  const now = new Date();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerText = `${days}D ${hours}H ${minutes}m ${seconds}s left`;

  const totalTime = targetDate - new Date('2024-07-06T00:00:00'); // Start date: today's date
  const timeElapsed = now - new Date('2024-07-06T00:00:00');
  const progressPercentage = (timeElapsed / totalTime) * 100;

  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = `${progressPercentage}%`;
  progressBar.innerText = `${progressPercentage.toFixed(2)}%`;
}

setInterval(updateCountdown, 1000);

button.addEventListener('click', function(){
  document.querySelector('.dateContainer').classList.add('active');
  document.querySelector('.dateContainer').style.height = '80px';
  document.querySelector('.cross').classList.add("active");
})

cross.addEventListener('click', function(){
  document.querySelector('.dateContainer').classList.remove('active');
  document.querySelector('.dateContainer').style.height = '0px';
  document.querySelector('.cross').classList.remove("active");
})

hardBtn.addEventListener('click', function(){
  document.getElementById('hard').classList.add('active');
})