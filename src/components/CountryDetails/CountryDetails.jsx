import { Component } from 'react';
import countries from '../../countries.json';
class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: countries,
      currentCountry: '',
    };
  }

  render() {
    const currentCode = this.props.match.params.id;
    const currentCountry = this.state.countries.find(
      (country) => country.cca2 === currentCode
    );
    const languages = [];
    for (let language in currentCountry.languages) {
      languages.push(
        <li className="pl-3" key={language}>
          {currentCountry.languages[language]}
        </li>
      );
    }

    return (
      <div className="bg-gray-50 w-1/2 rounded-2xl m-auto h-2/3 flex flex-col justify-around">
        <h1 className="text-center text-5xl">
          {currentCountry.name.common} {currentCountry.flag}
        </h1>
        <div className="flex justify-evenly text-gray-500">
          <div className="w-1/4">
            <ul className="text-2xl">
              <li className="pb-3">Capital: {currentCountry.capital}</li>
              <li className="pb-3">Region: {currentCountry.region}</li>
              <li className="pb-3">
                Languages:
                <ul>{languages}</ul>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <ul className="text-2xl">
              <li className="pb-3">Latitude: {currentCountry.latlng[0]}</li>
              <li className="pb-3">Longitude: {currentCountry.latlng[1]}</li>
              <li>Demonym: {currentCountry.demonym}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
