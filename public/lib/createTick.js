import audio from './audio.js';
import WhiteNoiseNode from './WhiteNoiseNode.js';

export default function(time = audio.currentTime) {
  return new Promise((resolve) => {
    const noise = new WhiteNoiseNode(audio, {
      sampleLength: .01,
    });

    const filter = new BiquadFilterNode(audio, {
      Q: 16,
      frequency: 2048,
      type: 'bandpass',
    });

    noise.connect(filter).connect(audio.destination);

    noise.start(time);

    noise.addEventListener('ended', () => {
      noise.disconnect();
      filter.disconnect();
      resolve();
    });
  });
}
