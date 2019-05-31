import React, { Component } from 'react';
import Spinner from './spinner';
import './projet.css'

export class Projet extends Component {
  render() {
    const { projet } = this.props;

    return !projet ? (
      <Spinner />
    ) : (
      <div>
        <h5 className="card-title">{projet.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{projet.country}</h6>
        <p className="offer-card-text">{projet.description}</p>
      </div>
    );
  }
}

export default Projet;
