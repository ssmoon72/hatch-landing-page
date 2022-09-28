import React from 'react';
import styles from './LandingPage.module.css';

import NavBar from '../components/NavBar/NavBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import InfoCard from '../components/InfoCard/InfoCard'

import wavyLines from '../assets/wavy-lines-icon.svg';
import sunshineHeart from '../assets/sunshine-heart-icon.svg';
import sunriseAlarm from '../assets/sunrise-alarm.svg';

const LandingPage = () => {
    const cardText = {
        card1: "Card Text 1",
        card2: "Card Text 2",
        card3: "Card Text 3"
    }
    return (
        <div>
            <NavBar />
            <HeroBanner />
            <div className={styles.headlineContainer}>
                <h4 className={styles.headlineText}> Your Heading Here </h4>
            </div>
            <div className={styles.infoCardContainer}>
                <InfoCard
                    cardImg={wavyLines}
                    cardText = {cardText.card1}
                />
                <InfoCard
                    cardImg={sunshineHeart}
                    cardText = {cardText.card2}
                />
                <InfoCard
                    cardImg={sunriseAlarm}
                    cardText = {cardText.card3}
                />
            </div>
        </div>
    )
}

export default LandingPage;