import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");


// Carrega a data atual.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday;
selectedDate.min = inputToday



form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("ENVIADO")
} )