//Imported NavLink and just changed links in this file to navlinks

import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <NavLink to="/albums">Albums</NavLink>
        </h4>
      </section>
      <section>
        <h4 className="menu-item active">
          <NavLink to="/artists">Artists</NavLink>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
