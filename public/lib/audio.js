const audio = new AudioContext();

if (audio.state === 'suspended') {
  document.body.addEventListener('click', () => {
    audio.resume();
  }, { once: true });
}

export default audio;
