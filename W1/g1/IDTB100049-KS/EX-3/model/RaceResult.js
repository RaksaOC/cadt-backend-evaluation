import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
  // TODO
  constructor(participantId, sport, time) {
    this.participantId = participantId;
    this.sport = sport;
    this.time = time;
  }
}
