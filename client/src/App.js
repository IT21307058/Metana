import logo from './logo.svg';
import './App.css';
import Form from "./pages/Form"
import Home from './pages/Home';
import { Routes as Switch, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <Home/> */}
      <Router>
        <Switch>
          <Route path='/' element={<Home />} />
          <Route path='/buildform-test' element={<Form />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
