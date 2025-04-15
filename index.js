const musicSelector = document.getElementById("musicSelector");
const bgMusic = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("toggleBtn");

musicSelector.addEventListener("change", () => {
    bgMusic.src = musicSelector.value;
    bgMusic.play();
    bgMusic.volume = 1;

});


toggleBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
});

window.addEventListener("load", () => {
    bgMusic.src = musicSelector.value;
    bgMusic.play().catch(() => {
        console.log("Autoplay blocked until user interacts.");
    });
});

 
 function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}${meridiem}`
    document.getElementById("clock").textContent = timeString
 }

 updateClock()
 setInterval(updateClock, 1000)

 
 document.addEventListener('mousemove', (e) => {
   const sparkle = document.createElement('div');
   sparkle.className = 'sparkle';
   sparkle.style.left = `${e.pageX}px`;
   sparkle.style.top = `${e.pageY}px`;
   document.body.appendChild(sparkle);
   
   setTimeout(() => {
     sparkle.remove();
   }, 800);
 });
