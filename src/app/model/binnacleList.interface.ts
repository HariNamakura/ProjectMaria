import { locationlistI } from "./locationList.interface";
import { monitorlistI } from "./monitorList.interface";
import { plaguelistI } from "./plagueList.interface";

export interface BinnacleListI {
    "binnacleID": Number,
    "binnacleDate": Date,
    "plagueID": Number,
    "monitorID": Number,
    "bedID": Number,
    "supervisorID": Number
}