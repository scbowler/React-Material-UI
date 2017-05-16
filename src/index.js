import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, cyan500 } from 'material-ui/styles/colors';

injectTapEventPlugin();

import App from './components/app';

const createStoreWithMiddleWare = applyMiddleware()(createStore);


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: cyan500,
        primary1Color: blue500

    },
});

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
