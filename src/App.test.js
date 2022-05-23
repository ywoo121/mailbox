import { render, screen } from '@testing-library/react';
import App from './App';
import ListView from './Listview'
test('renders learn react link', () => {
  render(<ListView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
