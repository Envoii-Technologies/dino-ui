import { render, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('Toggle', () => {
	it('should render', () => {
		render(<Toggle />);
		const testToggle = screen.getByText('Toggle Initiated!');
		expect(testToggle).toBeInTheDocument();
	});
});
