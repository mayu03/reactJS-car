'use strict';

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return(
        <nav className="navbar navbar-default ">
            <div className="container-fluid">
            <ul className="nav navbar-nav">
            <a className="navbar-brand" href="#">
                <img alt="Brand" src="..."/>
            </a>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
           
            <li><Link to="search" activeClassName="active">Search</Link></li>
           
            </ul>
            </div>
        </nav>
    );
};

export default Header;