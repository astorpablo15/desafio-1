const Usuario = require('./desafio')

const decirHora = () => {
    console.log(new Date().toLocaleString())
}

decirHora()

const user1 = new Usuario('Pablo', 'Dominguez', [], [])

console.log(user1.getFullName())

user1.addMascota("Wilson")
user1.addMascota("Simba")

console.log(user1.countMascotas())

user1.addBook({
    name: "Libro1",
    author: "Pablo Dominguez"
})

user1.addBook({
    name: "Playa",
    author: "Pablo Dominguez"
})

console.log(user1.getBookNames())

console.info("Hola carlos como va")

