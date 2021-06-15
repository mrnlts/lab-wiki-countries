import { Component } from 'react';
import axios from 'axios';
class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCountry: '',
      languages: '',
      loaded: '',
    };
  }

  componentDidMount() {
    const currentCode = this.props.match.params.id;
    const link = `https://restcountries.eu/rest/v2/alpha/${currentCode}`;

    axios.get(link).then((country) => {
      this.setState({
        currentCountry: country.data,
        languages: country.data.languages,
        loaded: true,
      });
    });
  }

  render() {
    const { currentCountry, languages, loaded } = this.state;

    return (
      <div className="bg-gray-50 w-1/2 rounded-2xl m-auto h-2/3 flex flex-col justify-around">
        <div className={!loaded && 'hidden'}>
          <div className="flex justify-between w-3/4 mb-5 mx-auto">
            <h1 className="text-center text-5xl w-2/4">
              {currentCountry.name}
            </h1>
            <img className="w-1/5" src={currentCountry.flag} alt="flag" />
          </div>
          <div className="flex justify-evenly text-gray-500 bg-green-100 p-4 w-4/5 rounded-3xl mx-auto">
            <div className="w-2/4">
              <ul className="text-2xl">
                <li className="pb-3">Capital: {currentCountry.capital}</li>
                <li className="pb-3">Region: {currentCountry.region}</li>
                <li>Demonym: {currentCountry.demonym}</li>
              </ul>
            </div>
            <div className="w-2/4">
              <ul className="text-2xl">
                <li className="pb-3">
                  Languages:
                  <ul>
                    {[...languages].map((lang, index) => (
                      <li className="ml-10 list-disc" key={index}>
                        {lang.name}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
