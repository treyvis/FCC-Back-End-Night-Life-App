import React, { Component } from 'react';
import Link from 'react-router-dom';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Actions from 'grommet/components/icons/base/Actions';
import Search from 'grommet/components/Search';

class Bar extends Component {
  render() {
    return (
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
            <Anchor href='/login'>
              Login
            </Anchor>
            <Anchor href='#'>
              Logout
            </Anchor>
          </Menu>
        </Box>
      </Header>
    );
  }
}

export default Bar;