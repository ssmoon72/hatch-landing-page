import React from 'react';
import styles from './LandingPage.module.css';

import NavBar from '../components/NavBar/NavBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import InfoCard from '../components/InfoCard/InfoCard'

import wavyLines from '../assets/wavy-lines-icon.svg';
import sunshineHeart from '../assets/sunshine-heart-icon.svg';
import sunriseAlarm from '../assets/sunrise-alarm.svg';
import heroImage from '../assets/hero-image.png'


const LandingPage = () => {
    const cardInfo = [
      {
        text: "This Is Card 1",
        image: wavyLines
      },
      {
        text: "This Is Card 2",
        image: sunshineHeart
      },
      {
        text: "This Is Card 3",
        image: sunriseAlarm
      }
    ]
    const handleButtonClick = () => {
      console.log("You clicked the button!");
  }
    return (
        <div>
            <NavBar />
            <HeroBanner
              heroImg={heroImage}
              handleClick={handleButtonClick} 
            />
            <div className={styles.headlineContainer}>
                <h4 className={styles.headlineText}> Your Heading Here </h4>
            </div>
            <div className={styles.infoCardContainer}>
                {
                  cardInfo.map((card) => {
                    return (
                      <InfoCard
                        key={card.text} 
                        cardImg={card.image}
                        cardText={card.text}
                      />
                    )
                  })
                }
            </div>
        </div>
    )
}

export default LandingPage;