import React, { useState, useEffect } from "react"
import Intro from './Intro';
import BioContainer from './BioContainer';
import SkillsContainer from './SkillsContainer';
import NavBar from '../Header/NavBar';
import Footer from '../Footer/Footer';
import AboutContainer from '../AboutPage/AboutContainer';
import DetailsContainer from '../DetailsPage/DetailsContainer';
import PortfolioContainer from '../PortfolioPage/PortfolioContainer';
import ErrorContainer from '../ErrorPage/ErrorContainer';
import { Route, Switch } from 'react-router-dom';
import './HomePage.css'

const HomeContainer = () => {

  useEffect(() => {

    const url = "https://limitless-hamlet-41654.herokuapp.com/portfolio/start";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
    window.scrollTo(0, 0)

  }, [])

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div className="body" >
            <Intro />
            <BioContainer />
            <SkillsContainer />
          </div>
        </Route>
        <Route path="/about">
          <AboutContainer />
        </Route>
        <Route path="/portfolio">
          <PortfolioContainer />
        </Route>
        <Route path="/404">
          <ErrorContainer />
        </Route>
        <Route path="/:portfolioTitle">
          <DetailsContainer />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default HomeContainer