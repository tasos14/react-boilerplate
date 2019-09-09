import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { extendObservable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { H2, Button } from 'components/common/styles';

class Login extends Component {
    constructor() {
        super();

        extendObservable(
            this,
            {
                username: '',
                setUsername(e) {
                    this.username = e.target.value;
                }
            },
            {
                setUsername: action
            }
        );

        this.setUsername = this.setUsername.bind(this);
    }

    login = () => {
        const { login } = this.props;
        login(this.username);
    }

    render() {
        return (
            <>
                <H2>Login</H2>
                <input type="text" onChange={this.setUsername} />
                <Button onClick={this.login}>login</Button>
            </>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func
};

Login.defaultProps = {};

export default inject(stores => ({
    login: stores.user.login
}))(observer(Login));
