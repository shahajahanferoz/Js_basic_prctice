
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUpMail from './components/SignUpMail'
import SignUpOtp from './components/SignUpOtp'
import SignUpForm from './components/SignUpForm'
import { Fragment } from 'react'
// import Home from './components/Home'
import SignInForm from './components/SignInForm'
import Dashboard from './components/Dashboard'
import PageNotFoundPage from './components/PageNotFoundPage'
import PrivateOutlet from './components/PrivateOutlet'
import ResetPassword from './components/ResetPassword'
import ResetPasswordOtp from './components/ResetPasswordOtp'
import UserProfile from './components/UserProfile'
import UserProfileTwo from './components/UserProfileTwo'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={< SignInForm /> } />
        <Route path='signup-email' element={<SignUpMail />} />
        <Route path='signup-otp' element={< SignUpOtp />} />
        <Route path='signup-form' element={< SignUpForm />} />
        <Route path='signin' element={< SignInForm />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/reset-password-otp' element={<ResetPasswordOtp />} />
        <Route path='/user-profile' element={ <UserProfile /> } />
        <Route path='/user-profile2' element={ <UserProfileTwo /> } />
        <Route element={ <PrivateOutlet />}>
          <Route path='dashboard' element={< Dashboard />} />
        </Route>
          <Route path='/*' element={ <PageNotFoundPage /> } />
      </Routes>
    </Fragment>
  )
}

export default App
