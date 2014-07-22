define(["Tone/core/Tone", "Tone/signal/GreaterThan", "Tone/signal/Switch"], function(Tone){

	/**
	 * 	@class  the output signal is the greater of the incoming signal and max
	 * 	
	 *  @constructor
	 *  @extends {Tone}
	 *  @param {number} max the 
	 */
	Tone.Max = function(max){
		Tone.call(this);

		/**
		 *  the max signal
		 *  @type {Tone.Signal}
		 *  @private
		 */
		this._maxSignal = new Tone.Signal(max);

		/**
		 *  @type {Tone.Switch}
		 *  @private
		 */
		this._switch = new Tone.Switch(this.input, this._maxSignal);

		/**
		 *  @type {Tone.Switch}
		 *  @private
		 */
		this._gt = new Tone.GreaterThan(max);

		//connections
		this.input.connect(this._gt);
		this._gt.connect(this._switch.gate);
		this._switch.connect(this.output);
	};

	Tone.extend(Tone.Max);

	/**
	 *  set the max value
	 *  @param {number} max the maximum to compare to the incoming signal
	 */
	Tone.Max.prototype.setMax = function(max){
		this._maxSignal.setValue(max);
	};

	/**
	 *  clean up
	 */
	Tone.Max.prototype.dispose = function(){
		this.input.disconnect();
		this.output.disconnect();
		this._maxSignal.dispose();
		this._switch.dispose();
		this._gt.dispose();
		this.input = null;
		this.output = null;
		this._maxSignal = null;
		this._switch = null;
		this._gt = null;
	};

	return Tone.Max;
});