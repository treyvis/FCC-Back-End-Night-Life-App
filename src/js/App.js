import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { getCurrentLocale, getLocaleData } from 'grommet/utils/Locale';
import { Provider } from 'react-redux';
import { initialize } from './actions/session';
import store from './store';

import App from 'grommet/components/App';
import Main from './pages/Main.js';


const locale = getCurrentLocale();
addLocaleData(en);
let messages;
try {
  messages = require(`./messages/${locale}`);
} catch (e) {
  messages = require('./messages/en-US');
}
const localeData = getLocaleData(messages, locale);

if (window.location.pathname !== '/login') {
  store.dispatch(initialize(window.location.pathname));
}

export default () => (
  <Provider store={store}>
    <IntlProvider locale={localeData.locale} messages={localeData.messages}>
      <App>
        <Main />
      </App>
    </IntlProvider>
  </Provider>
);
