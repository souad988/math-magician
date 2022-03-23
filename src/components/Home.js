import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home_container">
      <h2>Welcome to our world!</h2>
      <div className="home_content">
        <h3>
          this web app is made for math pationates,
          you can use our calculator to performe math operations,
          read funny quotes about math and more!!!
        </h3>
        <div className="home_quote_img" />
      </div>
    </div>
  );
}

export default Home;
