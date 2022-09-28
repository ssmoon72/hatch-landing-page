import React from 'react';
import styles from './InfoCard.module.css';
import Card from 'react-bootstrap/Card';

const InfoCard = (props) => {
    const { cardImg, cardText } = props;
        return (
            <Card className={styles.cardContainer}>
                <Card.Img className={styles.cardImg} src={cardImg} />
                <Card.Text className={styles.cardText}>
                    {cardText}
                </Card.Text>
            </Card>           
        )
    }   

export default InfoCard