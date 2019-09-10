import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Route, Switch, NavLink, Redirect
} from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import User from 'components/user/user.react';
import Login from 'components/login/login.react';
import styles from 'components/app/app.scss';

function Index() {
    return <h2 className={styles.h2}>Home</h2>;
}

function About() {
    return <h2 className={styles.h2}>About</h2>;
}

class App extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        const { username } = this.props;
        return (
            <>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        {username ? (
                            <li>
                                <NavLink to="/user">User</NavLink>
                            </li>
                        ) : (
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        )}
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/about" component={About} />
                    <Route path="/user" render={() => (username ? <User /> : <Redirect push to="/login" />)} />
                    <Route path="/login" render={() => (!username ? <Login /> : <Redirect push to="/user" />)} />
                </Switch>
            </>
        );
    }
}

App.propTypes = {
    username: PropTypes.string
};

App.defaultProps = {
    username: null
};

export default inject(stores => ({
    username: stores.user.username
}))(observer(App));
