import { schedulesDay } from "../schedules/load.js";
const selectdDate = document.getElementById("date");


selectdDate.addEventListener("change", () => {
  
  schedulesDay()
})