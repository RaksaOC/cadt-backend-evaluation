/**
 * Represents a duration of time, stored internally as total seconds.
 * Immutable: all operations return a new instance.
 */

// Exporting the class so it can be used in other modules
export class Duration {
    /**
     * Total duration in seconds.
     * @type {number}
     * @private
     */
    _totalSeconds;
  
    /**
     * Creates a new Duration object.
     * @param {number} [seconds=0] - The number of seconds.
     */
    constructor(seconds = 0) {
      this._totalSeconds = seconds;
    }
  
    /**
     * Creates a new Duration from a number of minutes and seconds.
     * @param {number} [minutes=0] - The number of minutes.
     * @param {number} [seconds=0] - The number of seconds.
     * @returns {Duration} A new Duration instance.
     */
    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
      const totalSeconds = minutes * 60 + seconds;
      return new Duration(totalSeconds);
    }
  
    /**
     * Returns a new Duration by adding another duration.
     * @param {Duration} other - Another duration to add.
     * @returns {Duration} A new Duration representing the sum.
     */
    plus = (other) => {
      return new Duration(this._totalSeconds + other._totalSeconds);
    };
  
    /**
     * Returns a new Duration by subtracting another duration.
     * Ensures no negative durations: returns 0 if result would be negative.
     * @param {Duration} other - Another duration to subtract.
     * @returns {Duration} A new Duration representing the difference.
     */
    minus = (other) => {
      const resultSeconds = Math.max(0, this._totalSeconds - other._totalSeconds);
      return new Duration(resultSeconds);
    };
  
    /**
     * Converts the duration into a human-readable string, e.g., "2m 30s".
     * @returns {string} The formatted duration string.
     */
    toString = () => {
      const minutes = Math.floor(this._totalSeconds / 60);
      const seconds = this._totalSeconds % 60;
      return `${minutes}m ${seconds}s`;
    };
  }
  

//  TODO - Copy from exercice 1