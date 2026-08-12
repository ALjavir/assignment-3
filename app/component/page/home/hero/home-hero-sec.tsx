import React from 'react';
import './Hero.css'; // Import your CSS file
import heroBg from "~/assets/image/hero-img.png"
import hmePlay from "~/assets/image/learn-more-icon.png"

export default function Hero() {
  return (
    <section id="home-hero-sec">
      {/* Left Column */}
      <div className="hm-hero-left-part">
        <h1>
          We boost <br />
          growth for your <br />
          statup business
        </h1>
        <p>
          Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment
        </p>

        <div className="hm-hero-btn">
          <button className="hm-btn-get-startted">Get Started</button>

          <button className="hm-btn-learn-more">
            <img src={hmePlay} alt="" />
            <p>Learn More</p>
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="hm-hero-right-part">
        <div className="hm-hero-img-container">
          {/* Main Hero Image */}
          <img 
            src={heroBg} 
            alt="Hero Business Growth" 
            className="hm-main-img" 
          />

          {/* Card 1: Top Floating Card */}
          <div className="hm-crd-1">
            <div className="hm-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <div className="hm-card-info">
              <h4>100% Business Growth</h4>
              <p className="hm-rating">
                <span className="star">★</span> <strong>4.9</strong> <span className="reviews">(1520 Reviews)</span>
              </p>
            </div>
          </div>

          {/* Card 2: Bottom Floating Card */}
          <div className="hm-card-2">
            <div className="hm-card-info">
              <h4>1000,000 Happy Clients</h4>
              <p className="hm-rating">
                <span className="star">★</span> <strong>4.9</strong> <span className="reviews">(15k Reviews)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}