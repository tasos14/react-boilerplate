import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

function User({ username, logout }) {
    return (
        <>
            <h2>Hi {username}</h2>
            <button onClick={logout}>logout</button>
        </>
    );
}
User.propTypes = {
    username: PropTypes.string,
    logout: PropTypes.func
};

User.defaultProps = {
    username: null
};

export default inject(stores => ({
    username: stores.user.username,
    logout: stores.user.logout
}))(observer(User));
