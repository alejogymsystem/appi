const {Schema, model } = require ('mongoose')  //Crear modelos en mongo

const HurtoSchema = ({
    tipohurto:{
        type: String,
        inique: true,
        require: [true, 'EL tipo de hurto es requerido']
    },

    direccion:{
        type:String,
        require:[true, 'La direccion es requerida']
    },

    fecha: {
        type: String,
        require: [true, 'La fecha es requerido']
    },

    ciudad: {
        type: String,
        require: [true, 'La ciudad requerida']
    },

    descripcion: {
        type: String,
        require: [true, 'La ciudad requerida']
    }
})

module.exports = model('hurto', HurtoSchema)



