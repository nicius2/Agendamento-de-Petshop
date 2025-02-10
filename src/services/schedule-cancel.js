import { apiConfig } from "../services/apiConfig.js";

export async function schedulesCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: 'DELETE',
        });

        alert("Agendamento removido com sucesso");
    } catch (error) {
        console.log(error);
        alert("Não foi possível remover o agendamento");
    }
}
