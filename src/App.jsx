import React from 'react'
import { HomePage, DetailPage, CartPage, FormPage} from './Screens'
import {Route, Routes} from 'react-router-dom'
import { NavBar, Footer} from './Components'




function App() {

  return (
    <>

      <NavBar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/form' element={<FormPage/>}/>
      </Routes>

      <Footer/>
      
    </>
  )
}

export default App
