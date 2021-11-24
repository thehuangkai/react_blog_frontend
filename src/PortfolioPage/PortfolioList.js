import React from "react"
import PortfolioItem from "./PortfolioItem"

const PortfolioList = props => {
  return (
    <ul className="portfolio-row">
      {props.portfolios.map(portfolio => (
        <PortfolioItem
          key={portfolio.id}
          portfolio={portfolio}
        />
      ))}
    </ul>
  )
}
export default PortfolioList