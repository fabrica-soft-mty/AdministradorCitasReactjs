import React,{Fragment, useState} from 'react'
import uuid from 'uuid/v4'

const Formulario = ({crearCita}) => {
    //crear el State de Citas
    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    });
    //Creando un state para los errores
    const [error, actulizarError] = useState(false);

    //Funcion que se ejecuta cuando escribe en un input
    const actulizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        });
    }
    //Cuando se envia el formulario
    const submitCita = (e) =>{
        e.preventDefault();

        //acciones que hacer cuando se envia una cita Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            console.log('hay un error');
            actulizarError(true);
            return;
        }
        //Eliminar el mensaje previo
        actulizarError(false);
        //Asignar ID
        cita.id = uuid();
        
        //Crear la cita
        crearCita(cita);

        //Reiniciar el Form
        actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
        })


    }
    //extaraer valoers
    const {mascota,propietario,fecha,hora,sintomas}=cita;


    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los Campos son obligatorios</p> :null}
            <form
                action=""
                onSubmit={submitCita}
                >
                <label htmlFor="">Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actulizarState}
                    value={mascota}
                />
                <label htmlFor="">Nombre Del Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Del Dueño"
                    onChange={actulizarState}
                    value={propietario}
                />
                <label htmlFor="">Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actulizarState}
                    value={fecha}
                />
                <label htmlFor="">Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actulizarState}
                    value={hora}
                />
                <label htmlFor="">Síntomas</label>
                <textarea 
                name="sintomas" 
                className= "u-full-width"
                onChange={actulizarState}
                value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                    
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;