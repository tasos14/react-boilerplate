import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import * as Styled from 'components/app/styles';

function Index() {
    return <Styled.H2>Home</Styled.H2>;
}

function About() {
    return <Styled.H2>About</Styled.H2>;
}

function Users() {
    return <Styled.H2 >Users</Styled.H2>;
}

class App extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <Router>
                <>
                    <nav>
                        <Styled.Ul>
                            <Styled.Li>
                                <Styled.StyledNavLink to="/" activeStyle={{ backgroundColor: 'red' }} activeClassName="active">Home</Styled.StyledNavLink>
                            </Styled.Li>
                            <Styled.Li>
                                <Styled.StyledNavLink to="/about" activeStyle={{ backgroundColor: 'red' }} activeClassName="active">About</Styled.StyledNavLink>
                            </Styled.Li>
                            <Styled.Li>
                                <Styled.StyledNavLink to="/users" activeStyle={{ backgroundColor: 'red' }} activeClassName="active">Users</Styled.StyledNavLink>
                            </Styled.Li>
                        </Styled.Ul>
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
