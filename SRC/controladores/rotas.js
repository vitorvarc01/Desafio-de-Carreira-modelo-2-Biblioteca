const express = require(`express`)
const roteador = express()
const { todoslivros, livroencontrado, porgenero, portitulo, porautor, novolivro, atualizarlivros, deletarlivro } = require(`./intermediario`)


roteador.get(`/`, todoslivros)
roteador.get(`/livros/:id`, livroencontrado)
roteador.get(`/livros/genero/:genero`, porgenero)
roteador.get(`/livros/titulo/:titulo`, portitulo)
roteador.get(`/livros/autor/:autor`, porautor)

roteador.post("/livros", novolivro)
roteador.put("/livros/:id", atualizarlivros)
roteador.delete("/livros/:id", deletarlivro)






module.exports = roteador