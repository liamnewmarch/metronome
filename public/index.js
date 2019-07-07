import PocketMetronome from './lib/PocketMetronome.js';

customElements.define('pocket-metronome', PocketMetronome);

try {
  navigator.serviceWorker.register('/service-worker.js');
} catch (error) {
  console.warn(error);
}
