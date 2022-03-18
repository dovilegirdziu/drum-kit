const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('playing');
}
// window.addEventListener('keydown', playSound);

document.addEventListener('keydown', function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stops the function from running
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
});

// To work on mouseclick/ mobile

  document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.add('playing');
      const keyValue = item.getAttribute('data-key');
      sound = document.querySelector(`audio[data-key="${keyValue}"]`);
      if (!sound) return; // stops the function from running
      sound.currentTime = 0; // rewind to the start
      sound.play();
    })
  });

// fitting with the notch
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);