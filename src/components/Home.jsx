import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({quote}) => {
  return (
    <div id="home">
        <h4>Welcome to Travelster!</h4>
        <h4>Would you rather stay in town and...</h4>
        <h4>1) {quote.activity}</h4>
        <h4>Or</h4>
        <h4>2) <Link style={{ textDecoration: 'none' }} to="/activities">Travel</Link> ?</h4>
        
  
        
    </div>
  )
}

export default Home