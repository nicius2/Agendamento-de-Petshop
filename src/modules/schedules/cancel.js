import { schedulesCancel } from "../../services/schedule-cancel.js"
import { scheduleDay } from "../schedules/load.js"

const period = document.querySelectorAll(".period")

period.forEach((period) => {

    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel")) {
            const item = event.target.closest("li")
            const { id } = item.dataset

            if (id) {
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                )

                if (isConfirm) {
                    await schedulesCancel({ id })
                }

            }

        }
    })
})