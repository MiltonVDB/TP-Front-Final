import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../Components'

const CartPage = () => {
    const {cart, getTotal} = useCustomContext()

    const Comprar = () => {

      Swal.fire(
        'Gracias por su compra',
        '',
        'success'
      )

    }

  return (
    <div className='container'>

      {cart.length > 0

      ?
      <div className='row'>

        {cart.map(product => (<ProductCartCard key={product.id} producto={product}/>))}

        <div>
          Total: ${getTotal()}
          <button onClick={Comprar()}>Confirmar</button>
        </div>

      </div>
      :
      <h1>No has Comprado nada</h1>
      }
    </div>
  )
}

export default CartPage