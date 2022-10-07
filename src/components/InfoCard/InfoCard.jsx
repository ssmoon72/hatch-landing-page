import React from 'react';
import styles from './InfoCard.module.css';
import Card from 'react-bootstrap/Card';

const InfoCard = (props) => {
    const { cardImg, cardText } = props;
        return (
            <Card data-testid="infoCard" className={styles.cardContainer}>
                <Card.Img data-testid="cardImage"className={styles.cardImg} src={cardImg} />
                <Card.Text data-testid="cardText" className={styles.cardText}>
                    {cardText}
                </Card.Text>
            </Card>           
        )
    }   

export default InfoCard