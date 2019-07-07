import MetronomeElement from './lib/MetronomeElement.js';

customElements.define('x-metronome', MetronomeElement);

try {
  navigator.serviceWorker.register('/service-worker.js');
} catch (error) {
  console.warn(error);
}
