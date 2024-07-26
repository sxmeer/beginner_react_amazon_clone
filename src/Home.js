import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="123"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          price={12}
          rating={3}
        />
        <Product
          id="124"
          title="Fitbit Inspire 2 Health & Fitness Tracker with a Free 1-Year Fitbit Premium Trial, 24/7 Heart Rate, Black"
          image="https://m.media-amazon.com/images/I/71TS9mA9HwL._AC_UY327_FMwebp_QL65_.jpg"
          price={78.95}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="125"
          title="Apple iPhone 11"
          image="https://m.media-amazon.com/images/I/715HCLsOHbL._AC_UY327_FMwebp_QL65_.jpg"
          price={999}
          rating={5}
        />
        <Product
          id="126"
          title="OnePlus 8T Aquamarine Green"
          image="https://m.media-amazon.com/images/I/71xOScdmmAL._AC_UY327_FMwebp_QL65_.jpg"
          price={599}
          rating={4}
        />
        <Product
          id="127"
          title="Total Wireless Samsung Galaxy A20 4G LTE Prepaid"
          image="https://m.media-amazon.com/images/I/81slhmwksHL._AC_UY327_FMwebp_QL65_.jpg"
          price={129}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="128"
          title="Samsung Electronics UN32N5300AFXZA 32' 1080p Smart LED TV (2018), Black"
          image="https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UY327_FMwebp_QL65_.jpg"
          price={299}
          rating={3}
        />
      </div>


    </div>
  )
}

export default Home
