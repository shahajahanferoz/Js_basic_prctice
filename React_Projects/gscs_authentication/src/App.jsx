
import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import SignUpForm from './components/SignUpForm'
import LayoutComponent from './components/LayoutComponent'
// import LayoutComponentTwo from './components/LayoutComponentTwo'
import RandomNameshow from './components/RandomNameshow'
import SignInForm from './components/SignInForm'
import ResetPassword from './components/ResetPassword'
import EmployeeList from './components/EmployeeList'
import SignUpFormTwo from './components/SignUpFormTwo'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-hook" element={<LayoutComponent />} />
        <Route path='/signup' element={<SignUpFormTwo />} />
        <Route path='/signin' element={<SignInForm />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/employee' element={<EmployeeList />} />
        <Route path='/random-name' element={<RandomNameshow />} />

      </Routes>
    </Fragment>
  )
}

export default App
