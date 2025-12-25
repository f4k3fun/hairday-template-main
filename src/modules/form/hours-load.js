import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours";

export function hoursLoad({date}){
  const opening = openingHours.map((hoursOpening) => {
    const [hours, _] = hoursOpening.split(":");

    const isValidate = dayjs(date).add(hours, "hour").isAfter();

    return {
      hour: hours,
      isValidat: isValidate,
    }
  })


  console.log(opening);
}