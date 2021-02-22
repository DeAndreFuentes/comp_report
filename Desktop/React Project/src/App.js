import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog";
import Todo from "./components/ToDo/index";
import FrontPage from "./components/frontpage/index";
import Cart from "./components/cart/index.jsx";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={FrontPage}></Route>
            <Route path="/frontPage" exact component={FrontPage}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/todo" exact component={Todo}></Route>
            <Route path="/cart" exact component={Cart}></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
