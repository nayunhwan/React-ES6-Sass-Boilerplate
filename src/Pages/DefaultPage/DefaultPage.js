
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, {Component} from 'react';

class DefaultPage extends Component {
  constructor(props) {
    super(props);

    this.select = (index) => {this.setState({selectedIndex: index})}
  }

  render() {
    return (
      <div>
        This is Skeleton Page
      </div>
    );
  }
}

export default DefaultPage