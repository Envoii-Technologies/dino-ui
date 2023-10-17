import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
	it('should render', () => {
		render(<Button />);
		const testButton = screen.getByText('Button Initiated!');
		expect(testButton).toBeInTheDocument();
	});
});
