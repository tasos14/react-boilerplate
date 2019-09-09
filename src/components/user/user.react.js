import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { H2, Button } from 'components/common/styles';

function User({ username, logout }) {
    return (
        <>
            <H2>Hi {username}</H2>
            <Button onClick={logout}>logout</Button>
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
