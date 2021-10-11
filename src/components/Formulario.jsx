import React,{useState} from 'react'
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({setGasto , setCrearGasto}) => {

    const [nombre,setNombre]= useState ("");
    const [cantidad,setCantidad] =useState(0);
    const [error,setError]= useState (false);

    const agregarGasto = e =>{
        e.preventDefault();

        //valido gasto
        if (cantidad < 1 || isNaN (cantidad) || nombre.trim() === ""){
               setError (true);
               return; 
        }

        setError(false);

        //objeto gasto

        const gasto = {
            nombre ,
            cantidad,
            id:shortid.generate()
        }
        
        setGasto (gasto);
        setCrearGasto (true);
        setNombre ("");
        setCantidad(0);
    }

    return ( 
        <form 
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"></Error> : null}
            <div className = "campo">
                <label>Nombre del gasto</label>
                <input 
                type="text" 
                className="u-full-width"
                placeholder="Ej. Transporte"
                value = {nombre}
                onChange = {e=> setNombre(e.target.value)}
                />
                

            </div>
            <div className = "campo">
                <label>Costo</label>
                <input 
                type="number" 
                className="u-full-width"
                placeholder="Ej. 500"
                value = {cantidad}
                onChange = {e=> setCantidad(parseInt(e.target.value,10))}
                />

            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
     );
}
 
export default Formulario;