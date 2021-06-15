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
    this.setState({ countries: this.props.countries });
  }

  render() {
    const countries = [...this.state.countries];
    return (
      <div>
        <ul className="flex flex-wrap w-4/5 m-auto justify-between">
          {countries.map((country, index) => (
            <li key={index} className="p-3 text-sm hover:bg-green-400 rounded">
              <Link to={`/country/${country.alpha2Code}`}>{country.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountriesList;
