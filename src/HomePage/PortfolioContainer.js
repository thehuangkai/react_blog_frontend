import React, { useState, useEffect } from "react" 
import PortfolioList from "./PortfolioList"

const PortfolioContainer = () => {
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        if (portfolios == null || portfolios.length == 0){
            const url = "https://limitless-hamlet-41654.herokuapp.com/portfolio";
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    setPortfolios(json)
                } catch (error) {
                    console.log("error", error);
                }
            };
            fetchData();
        } 
      }, [])

    return(
        <div className="portfolio">
            Products I worked on:
            <PortfolioList portfolios={portfolios}/>
             {/* {portfolio.map(portfolio => <div>{portfolio.title}</div>)}  */}
        </div>
    )

}

export default PortfolioContainer