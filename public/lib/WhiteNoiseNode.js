import NoiseBuffer from './NoiseBuffer.js';

export default class extends AudioBufferSourceNode {
  constructor(audio, { sampleLength, ...options } = {}) {
    const buffer = new NoiseBuffer({
      length: audio.sampleRate * sampleLength,
      sampleRate: audio.sampleRate,
    });
    super(audio, { buffer, ...options });
  }
}
