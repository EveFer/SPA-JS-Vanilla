import {App} from "./App.js"

const d = document
const w = window

d.addEventListener("DOMContentLoaded", App)
w.addEventListener("hashchange", App)
// delegación de eventos
d.addEventListener("click",  e => {
    if(e.target.matches(".post-card a")) {
        localStorage.setItem('postId', e.target.dataset.id)
    }
})

// Archivo orquetador que levanta la aplicacion