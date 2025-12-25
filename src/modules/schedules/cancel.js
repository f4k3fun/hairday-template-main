import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelectorAll(".period");
console.log(periods);



periods.forEach((period) => {
  period.addEventListener("click", async (e) => {
    if (e.target.classList.contains("cancel-icon")){
      const item = e.target.closest("li");
      const { id } = item.dataset;
      

      if(id){
        const isConfirm = confirm("Tem certeza que deseja remover esse cliente da lista");

        if(isConfirm){
          await scheduleCancel({id: id})
          schedulesDay();
        }
      }
    }
  })
})