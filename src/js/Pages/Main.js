import React, { Component } from 'react';

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
import Search from 'grommet/components/Search';

class Main extends Component {
  render() {
    return (
      <div>
        <Header>
          <Title>
            Night Life App | Salt Lake City
          </Title>
          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}>
            <Search inline={true}
              fill={true}
              size={'medium'}
              placeHolder={'Search'}
              suggestions={['Salt Lake City','San Francisco', 'Seatle', 'Chicago']}
              dropAlign={{"top": "bottom"}} />
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
      </div>
    );
  }
}

export default Main;