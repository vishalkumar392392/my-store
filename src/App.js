import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import OrderForm from "./containers/OrderForm/OrderForm";
import { Switch, Route } from "react-router-dom";
import Success from "./components/Success/Success";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: "120px" }}>
        <Switch>
          <Route path="/status" component={Success} />
          <Route path="/orders" component={Orders} />
          <Route path="/" component={OrderForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
