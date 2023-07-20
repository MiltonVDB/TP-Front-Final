import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../Components'
import './HomePage.css'

const HomePage = () => {
    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [currentProducts, setCurrentProducts] = useState(products)
    const [max, setMax] = useState(1000000)
    const [min, setMin] = useState(0)

    useEffect(() => {
      setCurrentProducts(
        products.filter(producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase()) && producto.precio >= min && producto.precio <= max
        ))}, [searchProduct, min, max])

  return (
    <div className='container'>

      <div className='row'>

        <div className='col-9'>

          <div className='row'>

            {currentProducts.map(producto => (<ProductCard producto={producto} key={producto.id}/>))}

          </div>

        </div>

        <div className='col-3'>

          <div>

            <p><i className="bi bi-search"></i>  Buscar</p>

            <input className='search-menu' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}/>

          </div>

          <div className='y-center'>

            <p>Precio Minimo</p>
            <div className='currecy-wrap'>
              
              <span className='currency-code'>$</span>

              <input className='minmax' type="number" value={min} onChange={(e) => setMin(Number(e.target.value))}/>


            </div>

            <p>Precio Maximo</p>

            <input className='minmax' type="text" value={max} onChange={(e) => setMax(Number(e.target.value))}/>

          </div>

        </div>

      </div>

    </div>
    
  )
}

export default HomePage