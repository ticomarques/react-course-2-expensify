import React, { Component } from 'react';
import request from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentWillMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    request
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=4230447151.1677ed0.6431a68d2911422f892f18ca4af2260d')
      .then((res) => {
        this.setState({
          photos: res.body.data
        });
        return res;
      })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Instagram</h1>
        </header>
        <div>
          {console.log(this.state.photos)}
          {console.log(res+'fsafa')}
        </div>
      </div>
    );
  }
}

export default App;



console.log('ajax.js loaded');