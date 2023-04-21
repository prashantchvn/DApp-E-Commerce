
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import { Route, Switch } from "react-router-dom"
import Footer from "./components/Footer";
import Product from "./components/Product";
import Explore from "./components/Explore";
import NotFound404 from "./components/NotFound404";

function App() {
  
  return (
    <>
      <Navbar />

        <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact  path="/home" component={Home} />
          <Route exact  path="/product/:id" component={Product} />
          <Route exact  path="/explore/:gender/:category" component={Explore} />
          <Route exact  path="/explore/:gender/" component={Explore} />
          <Route exact  path="*" component={NotFound404} />
        </Switch>

      <Footer/> 
    </>
  )
}

export default App;
