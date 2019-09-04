import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route, NavLink, Switch
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from 'components/app/app.scss';

function Index() {
    return <h2 className={styles.h2}>Home</h2>;
}

function About() {
    return <h2 className={styles.h2}>About</h2>;
}

function Users() {
    return <h2 className={styles.h2}>Users</h2>;
}

class App extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <Router>
                <>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <NavLink to="/" activeStyle={{ backgroundColor: 'red' }} activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" activeStyle={{ backgroundColor: 'red' }} activeClassName="active">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users" activeStyle={{ backgroundColor: 'red' }} activeClassName="active">Users</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/about" component={About} />
                        <Route path="/users" component={Users} />
                    </Switch>
                </>
            </Router>
        );
    }
}

export default App;
