import { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      countries: ''
    }
  }

  
  render() {
    return(
      <div className="App">
        <Navbar />
        <CountriesList/>
      </div>
    );
  }
}

export default App;
