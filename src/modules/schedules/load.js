import { hoursLoad } from "../form/hours-load";

const selectdDate = document.getElementById("date");


export function schedulesDay(){
  const date = selectdDate.value

  hoursLoad({date: date});
}