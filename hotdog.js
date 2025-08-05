  // me when hotdog
  
  
  let isAnimating = false;
  let clickCount = 0;

  function myFunction() {
    const image = document.getElementById('Hotdog');
    if (!image) return;

    if (isAnimating) {
      clickCount++;
    
      //   console.log("Click(s) during animation:", clickCount);

      if (clickCount === 4) {
        const explodeSound = document.getElementById('explode');
        if (explodeSound) explodeSound.play();

        setTimeout(() => {
          image.src = 'media/explosion.gif';
        }, 2359);

        image.onclick = null;
        return;
      }

      return;
    }

    const sounds = ['squish1', 'squish2', 'squish3'];
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const sound = document.getElementById(sounds[randomIndex]);
    if (sound) sound.play();

    isAnimating = true;
    image.style.transform = "scale(1, 0.5)";
    setTimeout(() => {
      image.style.transform = "scale(1, 1)";
      setTimeout(() => {
        isAnimating = false;

        if (clickCount < 4) {
        
        //   console.log("Click count reset");
        
        clickCount = 0;
        }
      }, 300);
    }, 300);
  }
