import React, { Component } from 'react';
import {BsFillHeartFill,BsHeartbreakFill} from 'react-icons/bs'

class CountLikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 12555340,
      show: true
    };
  }

  incrementValue = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  decreaseValue = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  toggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className='likes'>
        <button className='add' onClick={this.incrementValue}><i className='heartIcon'><BsFillHeartFill /></i></button>
        <button className='dec' onClick={this.decreaseValue}><i className='heartBrokeIcon'><BsHeartbreakFill /></i></button>
        <button onClick={this.toggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2 className='countNum'>Hearts: { this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export  {CountLikes};