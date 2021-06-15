import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import './App.css';
import './styles/output.css';
import CountryDetails from './components/CountryDetails/CountryDetails';
import countriesJson from './countries.json';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {countries: '' }
  }

  componentDidMount() {
  this.setState({countries: countriesJson})
}

  render() {
    const { countries } = this.state;
    return(
      <div className="bg-green-100 h-screen pt-8">
        <Navbar />
        <Switch>
          <Route exact path="/country/:id" component={CountryDetails} />
          <Route path="/">
            <CountriesList countries={countries} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
