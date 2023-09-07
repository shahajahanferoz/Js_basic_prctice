
import { Fragment } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import SignUpForm from './components/SignUpForm'
import LayoutComponent from './components/LayoutComponent'
import LayoutComponentTwo from './components/LayoutComponentTwo'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LayoutComponent />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
