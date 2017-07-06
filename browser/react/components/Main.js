import React, { Component } from 'react';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

//Switched HashRouter to BrowserRouter to get NoMatch page to work

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

const Main = props => {
  //console.log(props);
  return (
    <BrowserRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route exact path="/" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} play={props} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Player />
        </div>
      </BrowserRouter>
  );
};

export default Main;

// export default class Main extends Component {

//   render () {
//     return (
//       <BrowserRouter>
//         <div id="main" className="container-fluid">
//           <div className="col-xs-2">
//             <Sidebar />
//           </div>
//           <div className="col-xs-10">
//             <Switch>
//               <Route exact path="/albums" component={StatefulAlbums} />
//               <Route exact path="/" component={StatefulAlbums} />
//               <Route path="/albums/:albumId" component={SingleAlbum} />
//               <Route exact path="/artists" component={AllArtists} />
//               <Route path="/artists/:artistId" component={SingleArtist} />
//               <Route component={NoMatch} />
//             </Switch>
//           </div>
//           <Player />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }
