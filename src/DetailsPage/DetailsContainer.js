import React, { useState, useEffect } from "react"
import {
  useParams,
  useHistory
} from "react-router-dom";
import "./DetailsPage.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DetailsContainer = props => {
  let { portfolioTitle } = useParams();
  let history = useHistory();
  const [Detail, setDetail] = useState([])

  useEffect(() => {
    const url = "https://limitless-hamlet-41654.herokuapp.com/portfolio/" + portfolioTitle;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.status == 404) {
          history.push("/404");
        }
        else {
          const json = await response.json();
          setDetail(json)
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className="body">
      <img src={Detail.images} className="main-img" />
      <div style={{ fontSize: 14, fontWeight: 600 }}>{Detail.title}</div>

      <div className="sections">

      <div style={{marginTop:"5vh"}}>
          <div style={{ fontSize: 20, fontWeight: 600 }}> 
            Intro
          </div>
          {Detail.intro || <Skeleton count={5}/>}
        </div>

        <div style={{marginTop:"5vh"}}>
          <div style={{ fontSize: 20, fontWeight: 600 }}> 
            Role 
          </div>
          {Detail.role || <Skeleton count={5}/>}
        </div>

        <div style={{marginTop:"5vh"}}>
          <div style={{ fontSize: 20, fontWeight: 600 }}> 
            Results 
          </div>
          {Detail.results || <Skeleton count={5}/>}
        </div>

        <div style={{marginTop:"5vh"}}>
          <div style={{ fontSize: 20, fontWeight: 600 }}> 
            Tech Stack 
          </div>
          {Detail.tech_stack || <Skeleton count={5}/>}
        </div>

      </div>
      </div>

    

  )
}
export default DetailsContainer