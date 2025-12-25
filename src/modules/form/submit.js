import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");



// Carrega a data atual.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday;
selectedDate.min = inputToday



form.addEventListener("submit", async (e) => {
  e.preventDefault();


  try {
    const name = clientName.value.trim();
    if (!name) {
      return alert("Informe o nome do cliente!");
    };


    const hourSelectd = document.querySelector(".hour-selected");

    if (!hourSelectd) {
      return alert("Selecione a hora");
    }


    const [hour] = hourSelectd.textContent.split(":");


    const when = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime()

    console.log(name)

    await scheduleNew({
      id: id,
      name: name,
      when: when,
    });


    await schedulesDay()
    clientName.value = ""
  } catch (error) {
    alert("Nao foi possivel realizar o agendamento.");
    console.log(error)
  }

})