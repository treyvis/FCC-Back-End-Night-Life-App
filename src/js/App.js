import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { getCurrentLocale, getLocaleData } from 'grommet/utils/Locale';
import { Provider } from 'react-redux';
import { initialize } from './actions/session';
import store from './store';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import App from 'grommet/components/App';
import Actions from 'grommet/components/icons/base/Actions';
import Card from 'grommet/components/Card';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';


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
        <Header>
          <Title>
            Night Life App
          </Title>
          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}>
            <Menu icon={<Actions />}
              dropAlign={{ right: 'right' }}>
              <Anchor href='#'
                className='active'>
                Sign Up
              </Anchor>
              <Anchor href='#'>
                Login
              </Anchor>
              <Anchor href='#'>
                Logout
              </Anchor>
            </Menu>
          </Box>
        </Header>
        <Tiles flush>
          <Tile>
            <Card thumbnail='/img/dan-gold-105699.jpg'
              heading='Burger 13'
              description='Delectable burgers with an artistic touch.' />
          </Tile>
          <Tile>
            <Card thumbnail='/img/dan-gold-105699.jpg'
              heading='Burger 13'
              description='Delectable burgers with an artistic touch.' />
          </Tile>
          <Tile>
            <Card thumbnail='/img/dan-gold-105699.jpg'
              heading='Burger 13'
              description='Delectable burgers with an artistic touch.' />
          </Tile>
        </Tiles>
      </App>
    </IntlProvider>
  </Provider>
);
