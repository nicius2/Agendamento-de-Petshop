import { hourLand } from "../date/dateSchedule.js"

export function schedulesDay() {

    const date = document.querySelector(".dateForm")

    hourLand({date})
}