import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({date}){
  const opening = openingHours.map((hoursOpening) => {
    const [hours, _] = hoursOpening.split(":");

    const isValidate = dayjs(date).add(hours, "hour").isAfter();

    return {
      hour: hours,
      avaliable: isValidate,
    }
  })


  opening.forEach(({hour, avaliable}) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(avaliable ? "hour-available" : "hour-unavailable");

    li.textContent = hour

    hours.append(li);


    if(hour === "09"){
      hourHeaderAdd({title: "Manha"})
    } else if(hour === "12") {
      hourHeaderAdd({title: "Tarde"})
    } else if(hour === "17"){
      hourHeaderAdd({title: "Noite"})
    }

  });

  hoursClick()
}

function hourHeaderAdd({title}){
  const header = document.createElement("li");
  header.classList.add("hour-period");

  header.textContent = title;


  hours.append(header)
}