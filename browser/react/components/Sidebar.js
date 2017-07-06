import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <sidebar>
      <img src="/juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <NavLink to="/albums" activeClassName='active'>Albums</NavLink>
        </h4>
      </section>
      <section>
        <h4 className="menu-item active">
          <NavLink to="/artists" activeClassName='active'>Artists</NavLink>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
