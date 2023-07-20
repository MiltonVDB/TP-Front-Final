import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../Components'
import './DetailPage.css'



const DetailPage = () => {
    const {id} = useParams()
    const {getProductById, addProductCart, isInCart, getProductCartById} = useCustomContext()
    const [productDetail, setProductDetail] = useState (isInCart(id) ? getProductCartById(id) : getProductById(id)) 

  return (
    <div className='container'>
        

        <img src={productDetail.imagen} alt={productDetail.nombre} />

        <div>
          <h1>{productDetail.nombre}</h1>
          <h2>{productDetail.precio}</h2>
          <span>Descripcion: {productDetail.descripcion}</span>

          {isInCart(id) 
          ? <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/>
          : <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>}
        </div>

    </div>
  )
}

export default DetailPage