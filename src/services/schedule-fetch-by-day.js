import dayjs from "dayjs"
import { apiConfig } from "../services/apiConfig.js"

export async function scheduleFetchByDay({ date }) {
    // Fazer a requisição
    try {
        const reponse = await fetch(`${apiConfig.baseUrl}/schedules`)
        const data = await reponse.json()

        // Filtrando os agendamentos 
        const dailySchedules = data.filter((schedule) => 
        dayjs(date).isSame(schedule.when, "day")
        )

        return dailySchedules
    } catch (error) {
        alert("Não foi possivel buscar o agendamento")
        console.log(error)
    }
}