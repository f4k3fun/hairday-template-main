import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({date, schedules}){

  const unavailableHours = schedules.map((schedule) => dayjs(schedule.when).format("HH:mm"));


  console.log(unavailableHours)

  const opening = openingHours.map((hoursOpening) => {
    const [hours, _] = hoursOpening.split(":");

    const isValidate = dayjs(date).add(hours, "hour").isBefore();

    const avaliable = !unavailableHours.includes(hoursOpening) && !isValidate

    return {
      hour: hoursOpening,
      avaliable: avaliable,
    }
  })

  clearList()

  opening.forEach(({hour, avaliable}) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(avaliable ? "hour-available" : "hour-unavailable");

    li.textContent = hour

    hours.append(li);


    if(hour === "09:00"){
      hourHeaderAdd({title: "Manha"})
    } else if(hour === "12:00") {
      hourHeaderAdd({title: "Tarde"})
    } else if(hour === "17:00"){
      hourHeaderAdd({title: "Noite"})
    }

  });

  hoursClick()
}

function clearList(){
  hours.innerHTML = "";
}

function hourHeaderAdd({title}){
  const header = document.createElement("li");
  header.classList.add("hour-period");

  header.textContent = title;


  hours.append(header)
}