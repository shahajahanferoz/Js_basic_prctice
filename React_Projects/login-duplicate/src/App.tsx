
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignInForm from './components/SignInForm'
import SignUpMail from './components/SignUpMail'
import SignUpOtp from './components/SignUpOtp'
import SignUpForm from './components/SignUpForm'
import PrivateOutlet from './components/PrivateOutlet'
import Dashboard from './components/Dashboard'
import PageNotFoundPage from './components/PageNotFoundPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={< SignInForm />} />
      {/* <Route path='/home' element={< Home />} /> */}
      <Route path='signup-email' element={<SignUpMail />} />
      <Route path='signup-otp' element={< SignUpOtp />} />
      <Route path='signup-form' element={< SignUpForm />} />
      <Route path='signin' element={< SignInForm />} />
      {/* <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/reset-password-otp' element={<ResetPasswordOtp />} />
      <Route path='/sidenav' element={<SideNav />} />
      <Route path='/user-profile' element={<UserProfile />} />
      <Route path='/user-profile2' element={<UserProfileTwo />} /> */}
      <Route element={<PrivateOutlet />}>
        <Route path='dashboard' element={< Dashboard />} />
      </Route>
      <Route path='/*' element={<PageNotFoundPage />} />
    </Routes>
  )
}

export default App
