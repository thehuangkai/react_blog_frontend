import React from "react"
import PortfolioItem from "./PortfolioItem"

const PortfolioList = props => {
  return (
    <ul className="portfolio-row">
      { props.portfolios.map(portfolio => (
        <PortfolioItem
          key={portfolio.id}
          portfolio={portfolio}
        />
      )) || "Please refresh this if it takes too long, facing a little cold start issue"}
    </ul>
  )
}
export default PortfolioList