import dayjs from "dayjs";

const ButtonForms = document.querySelector("btn-submit")
const date = document.querySelector(".dateForm")

date.min = dayjs(new Date).format("YYYY-MM-DD")
date.value = dayjs(new Date).format("YYYY-MM-DD")

