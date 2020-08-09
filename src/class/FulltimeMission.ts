import { Mission } from "./Mission";
import * as moment from "moment";

export class FullTimeMission extends Mission {}

export const fullTimeMission = new FullTimeMission(
  "1",
  moment("13/02/2020", "DD/MM/YYYY"),
  moment("13/08/2020", "DD/MM/YYYY"),
  [],
  []
);
