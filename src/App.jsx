import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SignUp from './loginPage/SignUp'
import './App.css'
import SignIn from './loginPage/SignIn'
import QueryForm from './components/QueryForm'
import QueryResult from './components/QueryResult'

function App() {
 

  return (
    <>
    
     <BrowserRouter>
     
     <Routes>
      <Route path='/' exact Component={SignUp}/>
      <Route path='/sign-in'  Component={SignIn}/>
      <Route path='/query-form'  Component={QueryForm}/>
      <Route path='/result-form'  Component={QueryResult}/>

     </Routes>
    
     </BrowserRouter>
    </>
  )
}

export default App
