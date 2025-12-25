import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load";
import {schedulesShow} from "../schedules/show.js";

const selectdDate = document.getElementById("date");


export async function schedulesDay(){
  const date = selectdDate.value

  const dailySchedules = await scheduleFetchByDay({date: date});

  schedulesShow({ dailySchedules: dailySchedules})

  hoursLoad({ date: date, schedules: dailySchedules });
}