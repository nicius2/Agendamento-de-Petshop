import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"

const selectName = document.getElementById("name-tutor")
const selectPet = document.getElementById("name-pet")
const selectPhone = document.getElementById("phone")

// Formatando a hora dos dates
const form = document.getElementById("formSchedule")
const dateSchedules = document.getElementById("date")
const dateForm = document.querySelector(".dateForm")
const today = dayjs(new Date()).format("YYYY-MM-DD")
dateSchedules.min = today
dateSchedules.value = today
dateForm.min = today
dateForm.value = today

selectPhone.oninput = () => {
    let numero = selectPhone.value.replace(/\D+/g, ""); // Remove tudo que não for número

    // Adiciona o DDD
    if (numero.length > 1) {
        numero = `(${numero.substring(0, 2)}) ${numero.substring(2)}`;
    }

    if (numero.length > 10) {
        numero = `${numero.substring(0, 10)}-${numero.substring(10, 14)}`;
    }

    selectPhone.value = numero
}

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        const name = selectName.value.trim()
        if (!name) {
            return alert("Digite o nome corretamente")
        }

        const pet = selectPet.value.trim()
        if (!name) {
            return alert("Digite o nome do pet corretamente")
        }

        const phone = selectPhone.value
        if (!phone) {
            return alert("O numero de telefone é muito importante")
        }

        const selectHours = document.getElementById("hours")
        const [hour] = selectHours.value.split(":")

        const when = dayjs(dateForm.value).add(hour, "hour")

        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            pet,
            phone,
            when
        })

    } catch (error) {
        console.log(error)
        alert("Não foi possivel cadastrar o agendamento")
    }
}