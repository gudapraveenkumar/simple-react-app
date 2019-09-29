import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
   return (
      <header>
         <nav className="navbar fixed-top navbar-dark bg-primary">

            <NavLink className="nav-link navbar-brand nav-item text-white" to="/posts">
               Posts
            </NavLink>

            <div className="form-inline">
               <NavLink className="nav-link nav-item text-white" to="/new-post">
                  <button type="button" className="btn btn-outline-light btn-sm">New Post</button>
               </NavLink>
            </div>
         </nav>
      </header>
   );
}

export default NavBar;
