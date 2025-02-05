import dayjs from "dayjs"
import { hoursSchedules } from "../../utils/hoursSchedule.js"

const getDateSchedule = document.getElementById("date")
const select = document.querySelector("select")

const today = dayjs(new Date).format("YYYY-MM-DD")
getDateSchedule.min = today
getDateSchedule.value = today


// Carregando a hora para do agendamento
export function hourLand({ date, dailySchedules }) {

    // const unavaibleHours = dailySchedules.map((schedule) => 
    // dayjs(schedule.when).format("HH:mm"))

    const opening = hoursSchedules.map((hour) => {
        // recovers only the time
        const [scheduleHour] = hour.split(":")

        // Add the time to the date and check if it is in the past
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs()) 

        // Check if the time already contains or is in the past of date
        // const available = !unavaibleHours.includes(hour) && !isHourPast

        // return values
        return {
            hour,
            available: isHourPast
        }
    })

    opening.forEach((hour) => {
        const option = document.createElement("option")
        option.classList.add("hour")
        option.classList.add("option")
        option.textContent = hour.hour
        select.appendChild(option)
    })
    
}
