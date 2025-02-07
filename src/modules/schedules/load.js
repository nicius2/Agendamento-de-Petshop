import { hourLoad } from "../form/hour-load.js"
// import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

const selectDate = document.querySelector(".dateForm")

export function scheduleDay() {
    const date = selectDate.value
    // const dailySchedules = scheduleFetchByDay({ date })
    hourLoad({ date })
}