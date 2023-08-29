import { Fragment } from "react";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import ResetPassword from "./components/ResetPassword";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Settings from "./components/pages/Settings";
import Countries from "./components/pages/Countries";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
