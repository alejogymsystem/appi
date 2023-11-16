const {Router} = require('express')

const route = Router()


//Listar todos los datos
const { getHurto, postHurto, putHurto, deleteHurto } = require('../controllers/hurto')

route.get('/', getHurto)
route.post('/', postHurto)
route.put('/', putHurto)
route.delete('/', deleteHurto)

//Consultar un dato
route.get('/consultarHurto', (req, res) => {
    res.json({
        msg: 'Lista Datos'
    })
})

//Metodo para agregar datos
route.post('/', (req, res) => {
    res.json({
        msg: 'Insercion exitosa'
    })
})

//Metodo para editar
route.put('/', (req, res) => {
    res.json({
        msg: 'modificacion exitosa'
    })
})

//Metodo para eliminar
route.delete('/', (req, res) => {
    res.json({
        msg: 'eliminacion exitosa'
    })
})


module.exports = route 