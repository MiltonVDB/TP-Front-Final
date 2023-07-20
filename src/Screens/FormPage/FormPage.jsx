import React from 'react'
import './FormPage.css'

const FormPage = () => {
  return (
    <div className='container formcard'>
      <form onSubmit={() => alert('Los datos fueron correctamente ingresados')}>
          <input className='nombre' type="text" required/>
          <input className='email' type="email" required/>
          <input className='asunto' type="text" required/>
          <div>
            <button className='buttonDiv' type='submit'>Enviar</button>
          </div>
      </form>
      
    </div>
  )
}

export default FormPage