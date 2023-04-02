
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import { Route, Switch } from "react-router-dom"
function App() {
  
  return (
    <>
      <Navbar />

        <Switch>
          {/* <Route exact  path="/" component={Home} /> */}
          <Route exact  path="/home" component={Home} />
        </Switch>

    </>
  )
}

export default App;
