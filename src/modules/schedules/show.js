import dayjs from "dayjs"


const selectMorning = document.querySelector(".manha")
const selectAfternoon = document.querySelector(".tarde")
const selectNigth = document.querySelector(".noite")

export async function schedulesShow({ dailySchedules }) {
    try {
        selectAfternoon.innerHTML = ""
        selectMorning.innerHTML = ""
        selectNigth.innerHTML = ""

        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            item.setAttribute("data-id", schedule.id)

            const div = document.createElement("div")

            const spanHours = document.createElement("span")
            spanHours.classList.add("hour")
            spanHours.textContent = dayjs(schedule.when).format("HH:mm")

            const spanPacient = document.createElement("span")
            spanPacient.classList.add("pascient")   
            const strongPet = document.createElement("strong")
            strongPet.classList.add("pet")
            strongPet.textContent = schedule.pet

            const spanName = document.createElement("span")
            spanName.classList.add("name")
            spanName.textContent = ` / ${schedule.name}`

            const spanService = document.createElement("span")
            spanService.textContent = schedule.desc
            spanService.classList.add("service")
            const spanCancel = document.createElement("span")
            spanCancel.classList.add("cancel")
            spanCancel.textContent = "Remover Agendamento"

            spanPacient.append(strongPet, spanName)
            div.append(spanHours, spanPacient)
            item.append(div, spanService, spanCancel)
            
            const hour = dayjs(schedule.when).format("HH:mm")

            if(hour <= 12) {
                selectMorning.appendChild(item)
            } else if (hour >= 12 && hour <= 18) {
                selectAfternoon.appendChild(item)
            } else {
                selectNigth.appendChild(item)
            }
        })


    } catch (error) {
        console.log(error)
        alert("Não foi possivel mostrar o agendamento")
    }
}