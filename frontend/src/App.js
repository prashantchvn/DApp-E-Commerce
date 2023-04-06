
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import { Route, Switch } from "react-router-dom"
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  
  return (
    <>
      <Navbar />

        <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact  path="/home" component={Home} />
          <Route exact  path="/product/:id" component={Product} />
        </Switch>

      <Footer/> 
    </>
  )
}

export default App;
