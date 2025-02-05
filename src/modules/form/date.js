import dayjs from "dayjs"

const dateForm = document.querySelector(".dateForm")

const today = dayjs(new Date()).format("YYYY-MM-DD")
dateForm.min = today
dateForm.value = today