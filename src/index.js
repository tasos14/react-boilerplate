import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/app/app.react';

import user from 'stores/user';

const store = { user };

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}

render(
    <Router>
        <Provider {...store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}
