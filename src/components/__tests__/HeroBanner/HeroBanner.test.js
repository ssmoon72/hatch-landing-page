import { render, screen, fireEvent } from '@testing-library/react';
import HeroBanner from '../../HeroBanner/HeroBanner';
import '@testing-library/jest-dom';


test("should console log on button click", () => {
  const logSpy = jest.spyOn(console, 'log');

  render(
    <HeroBanner />
  )
  
  const button = screen.getByTestId("CTAButton")

  fireEvent.click(button)

  expect(logSpy).toHaveBeenCalledWith('You clicked the button!')

})