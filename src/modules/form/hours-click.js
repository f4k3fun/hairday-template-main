export function hoursClick(){
  const hours = document.querySelectorAll(".hour-available");
  


  hours.forEach((available) => {

    available.addEventListener("click", (e) => {

      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      e.target.classList.add("hour-selected")

    
    
    })
  })
}