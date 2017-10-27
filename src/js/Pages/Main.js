import React, { Component } from 'react';

import Card from 'grommet/components/Card';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

class Main extends Component {
  render() {
    return (
      <div>
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