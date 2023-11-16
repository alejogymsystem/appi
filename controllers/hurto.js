const {response} = require('express');
const { model } = require('mongoose');

Hurto = require('../models/hurto')

const getHurto = async(req, res ) => {
    
    const hurtos = await Hurto.find(); //Obtener todos los documentos de una coleccion
    res.json({
        msg: hurtos
    })
}

const postHurto = async(req, res) => {
    const datos = req.query //Capturar daros de la url-postman
    let mensaje = 'Inserccion exitosa'
    try {
        const hurto = new Hurto(datos) // instancia objeto
        await hurto.save() //guardar en la bd
        console.log(hurto)  
    } catch (error) {
        mensaje = error
        console.log (error)
    }

    res.json({
        msg: mensaje
    })

}    

const putHurto = async (req, res) => {
    const { tipohurto, direccion,fecha, ciudad, descripcion } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const usuario = await Hurto.findOneAndUpdate({tipohurto: tipohurto}, // Busqueda
        {tipohurto: tipohurto,direccion:direccion,fecha:fecha, ciudad:ciudad, descripcion:descripcion}) // Campos a editar
        mensaje = 'actualizacion exitosa'

    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje

    })
}

const deleteHurto = async (req, res) => {
    const { tipohurto } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const hurto = await Hurto.findOneAndDelete({tipohurto: tipohurto}) // Busqueda
        mensaje = 'eliminacion exitosa'

    } catch (error) {
        mensaje = 'error bru'
    }

    res.json({
        msg: mensaje

    })
}


module.exports = {
    getHurto,
    postHurto,
    putHurto,
    deleteHurto
}
