import React, { Component } from 'react'

class NavBar extends Component {

  componentDidMount() {
    const M = window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems,{});
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large "><i className="material-icons">menu</i></a>
            <a href="#" className="brand-logo right">Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
        <li><a href="#!"><i className="material-icons">directions_run</i>Log Out</a></li>
          <li><a href="#!"><i className="material-icons">playlist_add</i>Add Conversation</a></li>
          <li><div className="divider"></div></li>
          <li><a className="waves-effect" href="#!">conversaction1</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar











