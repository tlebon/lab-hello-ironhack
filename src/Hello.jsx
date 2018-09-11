import React from 'react'
import Navigation from "./Nav"

class Hello extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className="flex">
      <img src={require('../public/ironhack-logo.svg')} alt="" />
      <img src={require('../public/menu-top.svg')} alt="" />
      </div>
      <h1>Say Hello to React.js!
      <img src={require('../public/react-logo.svg')} alt="" />
      </h1>
        <h4>You will learn a Frontend framework from scratch, to becaome an Ninka Developer.</h4>
        
        <br/>
        <button>Awesome!</button>
        <div className="app">
          <Navigation/>
        </div>
      <img src={require('../public/react-logo.svg')} alt="" />
      </div>
    )
  }
}


export default Hello