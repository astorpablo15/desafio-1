class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombreDeMascota){
        this.mascotas.push(nombreDeMascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(libro){
        this.libros.push(libro)
    }

    getBookNames(){
        const nombres = this.libros.map(i => (i.name))
        return nombres
    }

}

module.exports = Usuario