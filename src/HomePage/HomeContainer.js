import React, { useState, useEffect } from "react"
import Intro from './Intro';
import PortfolioContainer from './PortfolioContainer';
import NavBar from '../Header/NavBar';
import Contact from '../ContactPage/Contact';
import Footer from '../Footer/Footer';
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
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />

    </>
  )
}

export default HomeContainer