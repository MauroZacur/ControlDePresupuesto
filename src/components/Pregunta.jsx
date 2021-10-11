import React , {Fragment,useState} from 'react'
import Error from './Error';

const Pregunta = ({setPresupuesto, setResto,setMostrar}) => {

    //defino el state

    const [cantidad,setCantidad]= useState(0);
    const [error , setError] = useState (false);

    //agrego el presupuesto

    const agregarPresupuesto = e => {   
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad)) {
            setError (true);
            return;
        }

        setError (false);
        setPresupuesto(cantidad);
        setResto (cantidad);
        setMostrar (false);

    }

   
    return ( 
        <Fragment>
            <h2>Ingresa tu Presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto"></Error> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    placeholder="*Presupuesto"
                    className="u-full-width"
                    onChange = {e => setCantidad(parseInt (e.target.value , 10))}
                
                ></input>
                <br />
                <input 
                    type="submit"
                    value = "Definir Presupuesto"
                    className="button-primary u-full-width"
                />
            </form>
        </Fragment>
        
     );
}
 
export default Pregunta;