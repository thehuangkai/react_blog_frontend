import React, { useState, useEffect } from "react"
import Intro from './Intro';
import PortfolioContainer from './PortfolioContainer';
import NavBar from '../Header/NavBar';
import Footer from '../Footer/Footer';
import AboutContainer from '../AboutPage/AboutContainer';
import { Route, Switch } from 'react-router-dom';
import './HomePage.css'

const HomeContainer = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div className = "body" >
            <Intro />
            <PortfolioContainer />
          </div>
        </Route>
        <Route path="/about">
          <AboutContainer />
        </Route>
      </Switch>
      <Footer />

    </>
  )
}

export default HomeContainer