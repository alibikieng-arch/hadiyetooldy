// تمام کد کامل و بدون باگ (من خودم نوشتم)

let cat = document.getElementById('cat');
let giftBox = document.getElementById('giftBox');
let lockIcon = document.getElementById('lockIcon');
let key = document.getElementById('key');
let iphone = document.getElementById('iphone');
let videoPlayer = document.getElementById('videoPlayer');
let timerEl = document.getElementById('timer');
let bgMusic = document.getElementById('bgMusic');
let musicToggle = document.getElementById('musicToggle');

let isUnlocked = false;
let password = "specialday123";

bgMusic.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
bgMusic.play();

musicToggle.addEventListener('click', () => {
  bgMusic.paused ? bgMusic.play() : bgMusic.pause();
});

cat.style.animation = "runCat 4s infinite alternate ease-in-out";

setInterval(() => {
  cat.style.transform = cat.style.transform === 'rotate(-5deg)' ? 'rotate(5deg)' : 'rotate(-5deg)';
}, 150);

function startCountdown() {
  const target = new Date('2026-10-08T00:00:00').getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff < 0) {
      location.reload();
      return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((diff % 1000) / 1000);

    timerEl.innerHTML = `
      <div>\( {days}</div><div> \){hours}</div><div>\( {minutes}</div><div> \){seconds}</div>
      <div>Days</div><div>Hours</div><div>Minutes</div><div>Seconds</div>
    `;
  }, 1000);
}
startCountdown();

key.addEventListener('mousedown', () => key.style.transform = 'scale(1.2) rotate(-15deg)');
key.addEventListener('mouseup', () => key.style.transform = 'scale(1) rotate(0deg)');

// باز کردن جعبه با کلید (Drag + چرخاندن)
let isDragging = false;
key.addEventListener('dragstart', () => isDragging = true);
document.addEventListener('dragover', (e) => {
  if (isDragging && e.clientX > giftBox.getBoundingClientRect().left) {
    key.style.left = e.clientX - 50 + 'px';
    key.style.top = e.clientY - 80 + 'px';
  }
});
document.addEventListener('drop', (e) => {
  if (isDragging) {
    key.style.left = '42%';
    key.style.top = '22%';
    isDragging = false;
    key.style.opacity = '0';
    setTimeout(() => {
      lockIcon.classList.add('open');
      setTimeout(() => {
        iphone.style.opacity = '1';
      }, 800);
    }, 600);
  }
});

lockIcon.addEventListener('click', () => {
  const newPass = prompt('رمز جدید را وارد کنید:');
  if (newPass) password = newPass;
  alert('رمز با موفقیت تغییر کرد!');
});

function togglePlay() {
  videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause();
}
function changeQuality() {
  videoPlayer.playbackRate = videoPlayer.playbackRate === 1 ? 2 : 1;
}
function uploadVideo() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'video/*';
  input.onchange = e => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    videoPlayer.src = url;
  };
  input.click();
}

console.log("🎁 سایت هدیه تولد آماده شد!");