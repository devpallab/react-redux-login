import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

// setup fake backend as real backend:  api's are not working for me
//backend:  http://13.127.127.40/api/user/ 
//backend: http://13.127.127.40/api/token/
import { fakeBackend } from './_helpers';
fakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);