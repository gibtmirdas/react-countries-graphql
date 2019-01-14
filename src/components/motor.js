import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import Country from './country';

class Motor extends Component {
  constructor(props) {
    super(props);
    this.state = {currentContinent: null};
  }

  getCountry = code => {
    return gql`{
      continent(code: "${code}") {
        name
        code
        countries{
          name
          emoji
          code
          currency
          phone
          languages{
            name
          }
        }
      }
    }`;
  };

  getContientsCodes = () => {
    return gql`
      {
        continents {
          code
          name
        }
      }
    `;
  };

  setContinent = event => {
    console.log(event.target.value);
    this.setState({currentContinent: event.target.value});
  };

  render() {
    const {currentContinent} = this.state;
    return (
      <div className="someCountry mt-4">
        <div className="form-group row">
          <p className="col-sm-2 offset-4">Continent</p>
          <Query query={this.getContientsCodes()}>
            {({data, loading, error}) => {
              if (loading) return <p>loading...</p>;
              if (error) return <p>{error.message}</p>;
              return (
                <select
                  className="form-control col-sm-2"
                  id="exampleFormControlSelect2"
                  onChange={this.setContinent}
                  onBlur={this.setContinent}
                >
                  <option value="" className="disabled">
                    Select a continent
                  </option>
                  {data.continents.map((item, i) => (
                    <option value={item.code} key={i}>
                      {item.name}
                    </option>
                  ))}
                </select>
              );
            }}
          </Query>
        </div>
        {/* TODO Check issues using variable as props of query,
        currently set as a variable of the getCountry function */}
        <Query query={this.getCountry(currentContinent)}>
          {({data, loading, error}) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>{error.message}</p>;
            if (!data.continent) return <p>Please select a continent</p>;

            return (
              <div className="row">
                {data.continent.countries.map((item, i) => (
                  <Country country={item} key={i} />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Motor;
