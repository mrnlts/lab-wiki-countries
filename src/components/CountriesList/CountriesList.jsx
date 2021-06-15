import { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: this.props.countries,
    };
  }

  render() {
    const { countries } = this.state;
    return (
      <div>
        <ul className="flex flex-wrap w-3/4 m-auto justify-between">
          {[...countries].map((country, index) => (
            <li key={index} className="p-3 text-sm hover:bg-green-400 rounded">
              <Link to={`/country/${country.cca2}`}>{country.name.common}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountriesList;
