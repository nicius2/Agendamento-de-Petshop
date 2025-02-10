import { hourLoad } from "../form/hour-load.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"

const selectDate = document.querySelector(".dateForm")

export async function scheduleDay() {
    const date = selectDate.value

    // Busca na API o agendamento  
    const dailySchedules = await scheduleFetchByDay({ date })

    schedulesShow({ dailySchedules })

    // Renderiza as horas   
    hourLoad({ date, dailySchedules })
}