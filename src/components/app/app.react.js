import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { H2 } from 'components/common/styles';
import User from 'components/user/user.react';
import Login from 'components/login/login.react';
import * as Styled from 'components/app/styles';

function Index() {
    return <H2>Home</H2>;
}

function About() {
    return <H2>About</H2>;
}

class App extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        const { username } = this.props;
        return (
            <>
                <nav>
                    <Styled.Ul>
                        <Styled.Li>
                            <Styled.StyledNavLink to="/">Home</Styled.StyledNavLink>
                        </Styled.Li>
                        <Styled.Li>
                            <Styled.StyledNavLink to="/about">About</Styled.StyledNavLink>
                        </Styled.Li>
                        {username ? (
                            <Styled.Li>
                                <Styled.StyledNavLink to="/user">User</Styled.StyledNavLink>
                            </Styled.Li>
                        ) : (
                            <Styled.Li>
                                <Styled.StyledNavLink to="/login">Login</Styled.StyledNavLink>
                            </Styled.Li>
                        )}
                    </Styled.Ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/about" component={About} />
                    <Route path="/user" component={User} />
                    <Route path="/login" component={Login} />
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
