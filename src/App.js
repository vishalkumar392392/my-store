import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import OrderForm from "./containers/OrderForm/OrderForm";
import { Switch, Route } from "react-router-dom";
import Success from "./components/Success/Success";
import Orders from "./containers/Orders/Orders";
import Persons from "./containers/Persons/Persons";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route path="/status" component={Success} />
          <Route path="/orders" component={Orders} />
          <Route path="/customers" component={Persons} />
          <Route path="/details/:id" component={Details} />
          <Route path="/" component={OrderForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
