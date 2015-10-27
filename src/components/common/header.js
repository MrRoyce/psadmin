'use strict';

// Modules
const React  = require('react'),
      Router = require('react-router');

// Files
const Link   = Router.Link;

class Header extends React.Component{

    constructor () {
        super();
        //Utility.bind(this, ['delete', 'togglePurchase']);
    }

    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="app" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" alt=""/>
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to='app'>Home</Link></li>
                        <li><Link to='authors'>Authors</Link></li>
                        <li><Link to='about'>About</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = Header;
