import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    return(
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
