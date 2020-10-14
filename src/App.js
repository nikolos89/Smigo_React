import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/1_Head/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Thanks from "./components/Thanks";
import Footer from "./components/3_Footer/Footer";
import Detail from "./components/Choose-tarif";
//import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";
import CardForm from "./components/credit-card/CardForm";

import Profile from "./components/2_Content/5_Profile/Profile";
import News from "./components/2_Content/4_News/News";

const App = () => {
  const [value, setValue] = React.useState("");

  //задём ходимые по проекту свойства типа доменов, и прочих свойств тарифного плана
  const [size, setSize] = React.useState("");

  const passSizeValue = (sizeValue) => {
    setSize(sizeValue);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/credit-card" component={CardForm}></Route>
        <div className="App">
          <div className="wrapper">
            <Navbar className="Navbar"></Navbar>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Home searchValue={value} {...props} />}
              ></Route>
              <Route
                path="/choose-tarif"
                render={(props) => (
                  <Detail passSizeValue={passSizeValue} {...props}></Detail>
                )}
              ></Route>
              <Route
                path="/cart"
                render={(props) => <Cart size={size} {...props}></Cart>}
              ></Route>
              <Route path="/checkout" component={Checkout}></Route>
              <Route path="/thank-you" component={Thanks}></Route>
              <Route path="/profile" component={Profile}></Route>
              <Route path="/news" component={News}></Route>

              {/* //выводим не найденную страницу на сайте
              <Route component={NotFound}></Route>
                      */}
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
