import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleArtist extends Component {

  constructor(){
    super();
    this.state = {
      artist: {}
      };
  }

  // componentDidMount () {
  //   axios.get('/api/artists/')
  //     .then(res => res.data)
  //     .then(artists => {
  //       this.setState({ artists });
  //     });
  // }

    render(){
      return (
        <div>
          <h3>ARTIST NAME</h3>
          <h4>ALBUMS</h4>
          <h4>SONGS</h4>
        </div>
      );
    }
}
