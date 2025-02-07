import { apiConfig } from "./apiConfig.js"

export async function scheduleNew({ id, name, pet, phone, desc, when }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, name, pet, phone, desc, when })
        })
        alert("Agendamendo feito com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possivel fazer o agendamento")
    }
}