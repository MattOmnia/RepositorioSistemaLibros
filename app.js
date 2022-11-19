const express = require('express')
const fs = require('fs')
const app = express() // return => app

app.use(express.static("public"))

let libros = JSON.parse(fs.readFileSync('./books.json', {
    encoding: 'utf-8'
}))

const writeBooks = (libros) => {
    fs.writeFileSync('./books.json', JSON.stringify(libros))
}

const port = 3000;

app.get('/books', (req, res) => {
    res.json(libros)
})

//localhost:3000/books/add?nombre=libro2&paginas=50&categoria=tecnologia

app.get('/books/add', (req, res) => { //esto deberia ser un post
    const {nombre, paginas, categoria} = req.query
    const id = libros.length

    libros.push({
        id: id,
        nombre: nombre,
        paginas: paginas,
        categoria: categoria
    })

    
    writeBooks(libros)

    res.json(libros)
})

//localhost:3000/books/update?id=1&nombre=dato&paginas=20&categoria=dato
app.get('/books/update', (req, res) => {
    const {id='', nombre='', paginas='', categoria=''} = req.query
    if(id.length>0){
        libros = libros.map(elemento => {
            if(elemento.id == id){
                if(nombre.length > 0){
                    elemento.nombre = nombre
                }
                if(paginas.length > 0){
                    elemento.paginas = paginas
                }
                if(categoria.length > 0){
                    elemento.categoria = categoria
                }
                return elemento
            }
            return elemento
        })
        writeBooks(libros)
        return res.json(libros)
    }
    return res.json({
        msg: 'id no esta definido'
    })
})

//id => req.params
//localhost:3000/books/delete/1
app.get('/books/delete/:id', (req, res) => {
    const {id} = req.params
    libros.map((elemento, indice) => {
        if(elemento.id == id){
            libros.splice(indice, 1)
        }
    })
    writeBooks(libros)
    res.json(libros)
})

app.listen(port, ()=>{
    console.log('server funcionando en el puerto: ' + port)
}) //http://localhost:3000