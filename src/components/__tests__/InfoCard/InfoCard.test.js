import { render, screen } from '@testing-library/react';
import InfoCard from '../../InfoCard/InfoCard';
import '@testing-library/jest-dom';
import sunriseAlarm from '../../../assets/sunrise-alarm.svg'

const testText = "card test text"

test("should render props correctly including text and image", () => {
  render(
    <InfoCard
      cardText = {testText}
      cardImg = {sunriseAlarm}
    />
  )
  const cardText = screen.getByTestId("cardText");
  const cardImage = screen.getByTestId("cardImage");

  expect(cardText).toHaveTextContent(testText);
  expect(cardImage).toBeInTheDocument();
})