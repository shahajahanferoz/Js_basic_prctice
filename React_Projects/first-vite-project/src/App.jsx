import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import Navbar from "./components/Navbar";
import { Fragment } from "react";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import { UserAdmin } from "./components/UserAdmin";

function App() {
  return (
      <Fragment>
      <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="about" element={<About />} />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProduct />} />
            <Route path="featured" element={<FeaturedProduct />} />
            <Route path="new" element={<NewProduct />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<UserAdmin />} />
          </Route>
          <Route path="/services" Component={Services} />
          <Route path="*" Component={NoMatch}></Route>
        </Routes>
      </Fragment>
  );
}

export default App;
