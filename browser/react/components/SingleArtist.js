import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';
import AllAlbums from './AllAlbums';
import { NavLink, Route } from 'react-router-dom';

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


    render () {
      const artist = this.state.selectedArtist;
      return (
        <div>
          <h3>{ artist.name }</h3>
          <ul className="nav nav-tabs">
            <li><NavLink to={`/artists/${artist.id}/albums`} activeClassName='active'>ALBUMS</NavLink></li>
            <li><NavLink to={`/artists/${artist.id}/songs`} activeClassName='active'>SONGS</NavLink></li>
          </ul>

          <Route path={`/artists/${artist.id}/albums`} render={() => <AllAlbums albums={this.state.selectedArtistAlbums} />} />
          <Route path={`/artists/${artist.id}/songs`} render={() => <Songs songs={this.state.selectedArtistSongs} />} />

        </div>
      );
    }
}
