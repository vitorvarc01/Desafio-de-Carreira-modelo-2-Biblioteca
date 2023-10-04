const { livros } = require(`./bancodedados`)
let geradordeid = livros.length + 1

// todos os livros 
const todoslivros = (req, res) => {
    return res.status(200).json(livros)
}
// livro por id 
const livroencontrado = (req, res) => {
    const id = req.params.id

    const livro = livros.find((livro) => livro.id === Number(id))

    if (!livro) {
        res.status(404).send(" Ainda não temos esse  livro.")
        return
    }

    res.status(200).json(livro)
}
// Encontrar por genero 
const porgenero = (req, res) => {
    const genero = req.params.genero

    const livro = livros.filter((livro) => livro.genero == genero)

    if (!livro) {
        res.status(404).send(" Ainda não temos esse genero de livro. ")
        return
    }

    res.status(200).json(livro)
}
// Encontrar por titulo
const portitulo = (req, res) => {
    const titulo = req.params.titulo

    const livro = livros.filter((livro) => livro.titulo == titulo)

    if (!livro) {
        res.status(404).send(" Ainda não temos esse titulo de livro. ")
        return
    }

    res.status(200).json(livro)
}
// Encontrar por Autor
const porautor = (req, res) => {
    const autor = req.params.autor

    const livro = livros.filter((livro) => livro.autor == autor)

    if (!livro) {
        res.status(404).send(" Ainda não temos esse autor de livro. ")
        return
    }

    res.status(200).json(livro)
}
// Cadastrar novo livro
const novolivro = (req, res) => {
    const livro = req.body
    // Valida o ID do livro.
    if (livros.find((livro) => livro.id === req.body.id)) {
        return res.status(409).send("ID do livro já existe.")
    }

    if (livros.find((livro) => livro.titulo === req.body.titulo)) {
        return res.status(409).send("Titulo do livro já existe.")
    }

    livro.id = geradordeid++
    livros.push(livro)
    res.status(201).json(livro)
}
// Atualizar livro
const atualizarlivros = (req, res) => {
    const id = req.params.id;

    const livro = livros.find((livro) => livro.id === Number(id));

    if (!livro) {
        res.status(404).send("Livro não encontrado");
        return;
    }

    // Atualiza o livro com os dados da solicitação.
    if (req.body.titulo) {
        livro.titulo = req.body.titulo
    }
    if (req.body.autor) {
        livro.autor = req.body.autor
    }
    if (req.body.genero) {
        livro.genero = req.body.genero
    }
    if (req.body.ano) {
        livro.ano = req.body.ano
    }


    res.status(200).json({ menagem: `Livro atualizado`, livro })
}
// Deletar livro
const deletarlivro = (req, res) => {
    const livro = livros.find((livro) => livro.id === Number(req.params.id))

    if (!livro) {
        return res.status(404).send("Livro não encontrado")
    }
    // Exclui o livro do array.
    livros.splice(livro, 1)

    res.status(200).json({ menagem: `Livro Excluido` })
}

module.exports = {
    todoslivros,
    livroencontrado,
    porgenero,
    portitulo,
    porautor,
    novolivro,
    atualizarlivros,
    deletarlivro
}