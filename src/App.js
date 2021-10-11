import React,{useState , useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';



function App() {
  //state de presupuesto y resto
  const [presupuesto,setPresupuesto] = useState(0);
  const [resto,setResto] = useState(0);
  //defino states
  const [mostrarPregunta,setMostrar] = useState (true);
  const [gastos,setGastos]= useState ([]);
  const [gasto,setGasto] = useState({});
  const [crearGasto,setCrearGasto] = useState (false);


     
      useEffect (()=>{
        
        
        //agrego el nuevo presupuesto
       if (crearGasto){
            setGastos ([
              ...gastos,
              gasto
            ]);
          //Resto del presupuesto actual
            const presupuestoRestante = resto - gasto.cantidad;
            setResto (presupuestoRestante);

          setCrearGasto(false);
       }

       

      },[gasto,crearGasto,gastos,resto])



  
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
    <div className="contenido-principal contenido">

      {mostrarPregunta ?
      
      ( <Pregunta
            setPresupuesto = {setPresupuesto}
            setResto = {setResto}
            setMostrar ={setMostrar}
         
         ></Pregunta>) 
         
         :
         (<div className="row">
         <div className ="one-half column">
          <Formulario
           setGasto= {setGasto}
           setCrearGasto= {setCrearGasto}
           
          ></Formulario>
         </div>
         <div className ="one-half column">
          <Listado
            gastos={gastos}
          ></Listado>
          <ControlPresupuesto
            presupuesto={presupuesto}
            resto = {resto}
          
          />
         </div>
       </div>)}
        
    </div>
    </div>
  );
}

export default App;
