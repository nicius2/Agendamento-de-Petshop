import { apiConfig } from "./apiConfig.js"

export async function scheduleNew() {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: POST,
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({id, name, pet, phone, desc, when})
        })

        alert("Agendamento feito com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi fazer o agendamento! Tente Novamente")
    }
}