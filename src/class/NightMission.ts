import { Mission } from "./Mission";
import * as moment from "moment";

export class NightMission extends Mission {
  public setName(name: string) {
    if (name.indexOf("-na-night") !== -1) {
      super.setName(name);
    }
  }
}

export const nightMission = new NightMission(
  "1",
  moment("13/02/2020", "DD/MM/YYYY"),
  moment("13/08/2020", "DD/MM/YYYY"),
  [],
  []
);
