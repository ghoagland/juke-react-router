import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';
import AllAlbums from './AllAlbums';
import { Link, HashRouter, Route } from 'react-router-dom';

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
      const artist = this.state.selectedArtist; // or however you've named it
      console.log(artist.id);
      return (
        <div>
          <h3>{ artist.name }</h3>
          <ul className="nav nav-tabs">
            <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
            <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
          </ul>

          {/* Routes will go here! */}
          <HashRouter>
            <div>
              <Route path={`/artists/${artist.id}/albums`} render={() => <AllAlbums albums={this.state.selectedArtistAlbums} />} />
              <Route path={`/artists/${artist.id}/songs`} render={() => <Songs songs={this.state.selectedArtistSongs} />} />
            </div>
          </HashRouter>

        </div>
      );
    }
}
