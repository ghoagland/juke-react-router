import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';
import AllAlbums from './AllAlbums';
import { Link } from 'react-router-dom';

export default class SingleArtist extends Component {

  constructor(){
    super();
    this.state = {
      selectedArtist: {},
      selectedArtistAlbums: [],
      selectedArtistSongs: []
    };
  }
  componentDidMount() {
    axios.get(`/api/artists/${this.props.match.params.artistId}`)
    .then(res => res.data)
    .then(selectedArtist => {
        this.setState({ selectedArtist });
    });

    axios.get(`/api/artists/${this.props.match.params.artistId}/albums`)
    .then(res => res.data)
    .then(selectedArtistAlbums => {
        this.setState({ selectedArtistAlbums });
    });

    axios.get(`/api/artists/${this.props.match.params.artistId}/songs`)
    .then(res => res.data)
    .then(selectedArtistSongs => {
        this.setState({ selectedArtistSongs });
    });
  }



    render(){
      return (
        <div>
          <h3>{this.state.selectedArtist.name}</h3>
          <AllAlbums albums={this.state.selectedArtistAlbums} />
          <Songs songs={this.state.selectedArtistSongs} />
        </div>
      );
    }
}
