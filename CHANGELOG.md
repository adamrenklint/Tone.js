### r3 - Groove

* Swing parameter on Transport
* Envelope ASDR stay in tempo-relative terms even with tempo changes
* Player loop positions stay in tempo-relative terms even with tempo changes
* Setters on PluckSynth and PulseOscillator
* new PWMOscillator
* OmniOscillator which combines PWMOscillator, Oscillator, and PulseOscillator into one
* Build cleans up global which it defined - leave no trace
* Deprecated Tone.Threshold - new class Tone.GreaterThanZero
* NOT, OR, AND, and IfThenElse signal logic operators and routing


### r2 - Getting Physical

* PluckSynth - Karplus-Strong Plucked String modeling synth
* Freeverb
* John Chowning Reverb (JCReverb)
* LowpassCombFilter and FeedbackCombFilter
* Sampler with pitch control
* Clock tick callback is out of the audio thread using setTimeout
* Optimized Tone.Modulo
* Tests run using OfflineRenderingContext
* Fixed Transport bug where timeouts/intervals and timelines were on a different tick counter
* AmplitudeEnvelope + triggerAttackDecay on Envelope
* Instruments inherit from Tone.Instrument base-class
* midi<-->note conversions


### r1 - First!