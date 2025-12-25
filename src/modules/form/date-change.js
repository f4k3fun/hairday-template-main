import { hoursLoad } from "./hours-load";

const selectdDate = document.getElementById("date");


selectdDate.addEventListener("change", () => {
  
  hoursLoad({date: selectdDate.value})
})