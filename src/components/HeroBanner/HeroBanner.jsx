import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from './HeroBanner.module.css'
import heroImage from '../../assets/hero-image.png'

const HeroBanner = () => {

    const handleButtonClick = () => {
        console.log("You clicked the button!");
    }
    return (
        <Container fluid className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.heroImage} src={heroImage} alt="woman stretching" />
            </div>
            <div className={`col-lg-4 ${styles.heroText}`}>
                <h1 className={styles.headline}>Rise & Shine</h1>
                <p className={styles.subheader}>Kitty loves pigs. Immediately regret falling into bathtub mice so it's 3am, time to create some chaos love stare at ceiling.</p>
                <Button className={styles.button} onClick={handleButtonClick} size="md">LEARN MORE</Button>
            </div> 
        </Container>
    )
}

export default HeroBanner;