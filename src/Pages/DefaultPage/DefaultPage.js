
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;



class DefaultPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    }

    this.select = (index) => {this.setState({selectedIndex: index})}
  }

  render() {
    return (
      <div>
        <AppBar
          title="Test"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <BottomNavigation className="bottom-nav" selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default DefaultPage