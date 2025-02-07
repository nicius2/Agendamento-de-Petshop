import dayjs from "dayjs"


const selectMorning = document.querySelector(".manha")
const selectAfternoon = document.querySelector(".tarde")
const selectNigth = document.querySelector(".manha")
const ul = document.querySelector("ul")

export async function schedulesShow({ dailySchedules }) {
    try {
        selectMorning.innerHTML = ""
        selectAfternoon.innerHTML = ""
        selectNigth.innerHTML = ""

        // Renderiza os agendamentos por periodo
        dailySchedules.forEach((schedule) => {
            const li = document.createElement("li")

            const div = document.createElement("div")
            const spanHour = document.createElement("span") 
            spanHour.classList.add("hour")
            const spanPascient = document.createElement("span")
            spanPascient.classList.add("pascient")
            const strongPet = document.createElement("strong")
            strongPet.classList.add("pet")
            const spanName = document.createElement("span")
            spanName.classList.add("name")

            const spanServices = document.createElement("span")
            spanServices.classList.add("service")
            const spanCancel = document.createElement("span")
            spanCancel.classList.add("cancel")
            spanCancel.textContent = "Remover Agendamento"

            spanHour.textContent = dayjs(schedule.when).format("HH:mm")

            strongPet.textContent = schedule.pet
            spanName.textContent = (` / ${schedule.name}`)
            spanPascient.append(strongPet, spanName)
            
            div.append(spanHour, spanPascient)
            spanServices.textContent = schedule.desc
            li.append(div, spanServices, spanCancel)
            ul.append(li)

            // const hour = dayjs(schedule.when).hour()
            // if(hour <= 12) {
            //     selectMorning.appendChild(ul)
            // } else if (hour >= 12 && hour < 18) {
            //     selectAfternoon.appendChild(ul)
            // } else {
            //     selectNigth.appendChild(ul)
            // }

        })
    } catch (error) {
        alert("Não foi possivel exibir o agendamento")
        console.log(error)
    }



}