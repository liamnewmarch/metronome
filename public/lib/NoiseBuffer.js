export default class extends AudioBuffer {
  static defaultNoiseFunction(channel) {
    for (let i = 0; i < channel.length; i++) {
      channel[i] = Math.random() * 2 - 1;
    }
  }

  constructor({ noiseFunction, ...options } = {}) {
    super(options);
    this.fill(noiseFunction);
  }

  get [Symbol.iterator]() {
    return function* () {
      for (let i = 0; i < this.numberOfChannels; i++) {
        yield this.getChannelData(i);
      }
    }.bind(this);
  }

  fill(noiseFunction = this.constructor.defaultNoiseFunction) {
    for (const channel of this) {
      noiseFunction(channel);
    }
    return this;
  }
}
