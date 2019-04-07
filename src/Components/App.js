import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'
import items from './Global/data/menu'


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }
  render() {
    const { children } = this.props;
    return (
      <div className="App">
          <Header 
            title="Revueltas Times" 
            items={ items }/>
          <Content body={ children }/>
          <Footer copyright="&copy; Desarrollado por Grupo Luan"/>
      </div>
    );
  }
}

export default App;
