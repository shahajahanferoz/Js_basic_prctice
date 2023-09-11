
import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import SignUpForm from './components/SignUpForm'
import LayoutComponent from './components/LayoutComponent'
// import LayoutComponentTwo from './components/LayoutComponentTwo'
import RandomNameshow from './components/RandomNameshow'
import SignInForm from './components/SignInForm'
import ResetPassword from './components/ResetPassword'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-hook" element={<LayoutComponent />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/signin' element={<SignInForm />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/random-name' element={<RandomNameshow />} />

      </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
