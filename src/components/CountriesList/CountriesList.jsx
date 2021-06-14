import { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: '',
    };
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/mledoze/countries/master/countries.json'
    )
      .then((response) => response.json())
      .then((json) => this.setState({ countries: json }));
  }

  render() {
    const { countries } = this.state;
    return (
      <div>
        <h1>Countries list</h1>
        <ul>
          {[...countries].map((country, index) => (
            <li key={index}>
              <Link to={`/country${index}`}>{country.name.common}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountriesList;
