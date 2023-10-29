import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
	it('should render', () => {
		render(<Input />);
		const testInput = screen.getByText('Input Initiated!');
		expect(testInput).toBeInTheDocument();
	});
});
