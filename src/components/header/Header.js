import React, { Component } from 'react';
import logo from '../../assets/logo.svg';

export default class Header extends Component{
  render() {
    return (
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React Website Starter with Sass</h1>
          <p className="intro">
            This is the header
          </p>
        </header>
    )
  }
}
