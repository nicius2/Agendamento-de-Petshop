import dayjs from "dayjs"
import { hoursSchedules } from "../../utils/hoursSchedule.js"

const select = document.querySelector("select")

export async function hourLoad({date}) {

    select.innerHTML = ""
    const opening = hoursSchedules.map((hour) => {
        const [scheduleHour] = hour.split(":")

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        return{
            hour,
            available: !isHourPast
        }
    })

    opening.forEach(({hour, available}) => {
        const option = document.createElement("option")
        option.classList.add("hour")
        option.classList.add(available ? "option" : "option-unavaible")

        option.textContent = hour

        if (!available) {
            option.disabled = true; // Desativa a opção se não estiver disponível
        }
        select.appendChild(option)
    })

}