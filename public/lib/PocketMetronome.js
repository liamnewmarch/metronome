import Metronome from './Metronome.js';

export default class extends HTMLElement {
  constructor() {
    super();
    this.metronome = new Metronome();
  }

  connectedCallback() {
    const button = this.querySelector('button');
    const input = this.querySelector('input');

    this.metronome.addEventListener('playstatechange', () => {
      this.toggleAttribute('playing', this.metronome.playing);
    });

    button.addEventListener('click', () => {
      if (this.metronome.playing) {
        this.metronome.stop();
      } else {
        this.metronome.start();
      }
    });

    input.addEventListener('input', ({ target }) => {
      const span = this.querySelector('span');
      this.metronome.tempo = parseFloat(target.value);
      span.textContent = this.metronome.tempo;
    });

    input.dispatchEvent(new Event('input'));
  }
}
