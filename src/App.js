import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   
  
  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    catPics: state.cats
  }
}

export default connect(mapDispatchToProps, { fetchCats })(App)

