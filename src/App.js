import React, { Fragment, useState,useEffect } from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'
import PropTypes from 'prop-types';


function App() {
  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas
  const [citas,guardarCitas] = useState([citasIniciales]);

  //USe efect para realizar operaciones cuando el State cambia
  useEffect( () =>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  },[citas,citasIniciales]);

  //Funcion que modifica las citas toma las actules y agrega la neuva
  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ]);
  }
  //Funcion que elimina una cita por su id
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !==id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';
  

  return (
    <Fragment>
    <h1>Administrador de Pacientes</h1>
    <div className="container">
        <div className="row">
            <div className="one-half column">
                <Formulario
                  crearCita ={crearCita}
                />
            </div>
            <div className="one-half column">
                  <h2>{titulo}</h2>
                  {citas.map(cita =>(
                    <Cita
                      key={cita.id}
                      cita={cita}
                      eliminarCita={eliminarCita}
                    />
                  ))}
            </div>
        </div>
    </div>
    </Fragment>
  );
}

Formulario.propTypes ={
  crearCita:PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default App;
