import { scheduleDay } from "../../modules/schedules/load.js"

const selectDate = document.querySelector(".dateForm")

selectDate.onchange = () => scheduleDay()