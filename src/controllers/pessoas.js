
const index = async ({Pessoa}, req, res) => {
    const pessoas = await Pessoa.findAll()
    res.render('pessoas/index', {pessoas})
}

const createForm= (req, res) => {
    res.render('pessoas/create')
}

const createProcess = async ({Pessoa}, req, res) => {
    await Pessoa.create(req.body)
    res.redirect('/pessoas')
}

const deleteOne = async ({Pessoa}, req, res) => {
    await Pessoa.destroy({
        where: {
            id: req.params.id
        }
    })

    res.redirect('/pessoas')
}

const updateProcess = async ({Pessoa}, req, res) => {
    await Pessoa.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/pessoas/')
}

const updateForm= async ({Pessoa}, req, res) => {
    const pessoa = await Pessoa.findByPk(req.params.id)

    res.render('pessoas/edit', {pessoa})
}

module.exports = {
    index,
    createForm,
    createProcess,
    deleteOne,
    updateProcess,
    updateForm
}