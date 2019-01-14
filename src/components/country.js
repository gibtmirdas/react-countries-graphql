import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Country extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card m-2 text-white bg-secondary">
          <div className="card-body">
            <h5 className="card-title">
              {this.props.country.emoji} {this.props.country.name}
            </h5>
            <h6 className="card-subtitle text-muted">
              {this.props.country.code}
            </h6>
            <ul className="list-group list-group-flush text-left">
              <li className="list-group-item text-white bg-secondary">
                <b>Currency - </b>
                {this.props.country.currency}
              </li>
              <li className="list-group-item text-white bg-secondary">
                <b>Phone - </b>
                {this.props.country.phone}
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-text">Langues</h5>
            <ul className="list-group list-group-flush text-left">
              {this.props.country.languages.map((item, i) => (
                <li className="list-group-item text-white bg-secondary" key={i}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Country.propTypes = {
  country: {
    name: PropTypes.string,
    emoji: PropTypes.string,
    currency: PropTypes.string,
    phone: PropTypes.string,
  },
};

export default Country;
