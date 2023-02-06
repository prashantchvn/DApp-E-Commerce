
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Signin from "./components/Signin";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from './components/Footer'
import { Route, Switch } from "react-router-dom"
import Cart from './components/Cart'
import Seller from "./components/Seller";
import Products from './components/Products'
import Product from "./components/Product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (
    <>

      <Navbar />
      

        <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact  path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
          <Route path="/cart" component={Cart} />
          <Route path="/about-us" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/seller" component={Seller} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path='/about' component={About} />
       
          
        </Switch>
      
      
      <Footer />
    </>
  )
}

export default App;
