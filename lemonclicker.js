// not going to work on this any more for this update as I just want to publish the update as it has

function lemonClicker(event) {
  let clickCount = parseInt(localStorage.getItem('lemonClickCount')) || 0;
  const image = event.currentTarget;

  if (!image) return;

  clickCount++;
  localStorage.setItem('lemonClickCount', clickCount);

  const headingText = document.getElementById("LemmClicker");

  if (headingText) {
    const lemonText = clickCount === 1 ? `Lemon` : `Lemons`;
    headingText.textContent = `LemmClicker - ${clickCount} ${lemonText}`;
  }


  const sounds = ['click1', 'click2', 'click3'];
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const originalSound = document.getElementById(sounds[randomIndex]);

  if (originalSound) {
    const clonedSound = originalSound.cloneNode();
    clonedSound.play();
  }

  isAnimating = true;

  image.style.transition = "transform 0.2s";
  image.style.transform = "scale(0.95, 0.95)";

  setTimeout(() => {
    image.style.transform = "scale(1, 1)";
    isAnimating = false;
  }, 200);
}



window.lemonClicker = lemonClicker;
