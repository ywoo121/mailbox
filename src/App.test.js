import { render, screen } from '@testing-library/react';
import App from './App';
import Board from './Board';
import ListView from './Listview'
test('renders learn react link', () => {
  render(<Board />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
