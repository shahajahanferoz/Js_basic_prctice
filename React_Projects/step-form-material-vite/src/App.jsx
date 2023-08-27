import { Fragment } from "react";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInForm from "./components/SignInForm";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/login" element={<SignInForm />} />
      </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
