import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';


export default class SingleAlbum extends Component {
  constructor(){
    super();
    this.state = {
      selectedAlbum: {}
    };
  }


  componentDidMount () {
    axios.get(`/api/albums/${this.props.match.params.albumId}`)
      .then(res => res.data)
      .then(selectedAlbum => {
        this.setState({ selectedAlbum });
      });
  }

  render () {
    //console.log(this.props);
    const album = this.state.selectedAlbum;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} play={this.props} />
      </div>
    );
  }
}
