import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Home = ({quote}) => {
  return (
    <div>
        <h3>Welcome to Phase 2 Project Home Page</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum atque perferendis accusantium deserunt exercitationem illum consequuntur molestiae debitis pariatur. Deserunt voluptatum quaerat quasi placeat perspiciatis sunt, consequuntur quos eius.</p>
      

        <h4>Would you rather stay in town and...</h4>
        <h4>1) {quote.activity}</h4>
        <h4>Or</h4>
        <h4>2) <Link to="/activities">Travel</Link> ?</h4>
        
  
        
    </div>
  )
}

export default Home