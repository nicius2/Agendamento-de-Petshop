import { hourLoad } from "../form/hour-load.js"

const selectDate = document.querySelector(".dateForm")
export function scheduleDay() {

    const date = selectDate.value
    hourLoad({ date })
}