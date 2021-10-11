import React, {Fragment} from 'react'
import {revisarPresupuesto} from '../helpers'

const ControlPresupuesto = ({presupuesto , resto}) => {
    return ( 
        <Fragment>
            <div className ="alert alert-primary">
                    Presupuesto: $ {presupuesto}
            </div>
            <div className = {revisarPresupuesto (presupuesto,resto)}>
                    Restante: $ {resto}
            </div>


        </Fragment>


     );
}
 
export default ControlPresupuesto;