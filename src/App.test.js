import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  const paragraphElement = screen.getByText(/Nem Kálmán/i);
  
  expect(linkElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});
