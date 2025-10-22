// Importing the necessary modules 
import Home from "./Pages/Home/Home"; 
import About from "./Pages/About/About"; 
import { Component, Fragment } from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// Creating the class component 
class App extends Component {
  // Rendering the app component 
  render() {
    // return the jsx component 
    return(
      <Fragment> 
          <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/about" element={<About /> } /> 
            </Routes>
          </BrowserRouter>
      </Fragment>
    )
  }

}

// Exporting the app component 
export default App; 