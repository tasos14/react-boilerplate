import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { extendObservable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

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
                <h2>Login</h2>
                <input type="text" onChange={this.setUsername} />
                <button onClick={this.login}>login</button>
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
