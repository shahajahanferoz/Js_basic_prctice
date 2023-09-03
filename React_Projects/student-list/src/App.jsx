import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Fragment } from 'react'
import RegestrationForm from "./components/RegestrationForm";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegestrationForm />} />
      </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App