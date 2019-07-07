import audio from './audio.js';
import createTick from './createTick.js';

export default class extends EventTarget {
  constructor({ playing = false, tempo = 120 } = {}) {
    super();
    this.playing = playing;
    this.tempo = tempo;
  }

  async _scheduleNext(lastTime = audio.currentTime) {
    try {
      if (!this.playing) return;
      const time = lastTime + 60 / this.tempo;
      await createTick(time);
      this._scheduleNext(time);
    } catch (error) {
      console.error(error);
    }
    return this;
  }

  start() {
    this.playing = true;
    this.dispatchEvent(new Event('playstatechange'));
    this._scheduleNext();
    return this;
  }

  stop() {
    this.playing = false;
    this.dispatchEvent(new Event('playstatechange'));
    return this;
  }
}
