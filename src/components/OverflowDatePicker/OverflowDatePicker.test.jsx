import { render, screen } from '@testing-library/react';
import { OverflowDatePicker } from './OverflowDatePicker';

describe('OverflowDatePicker', () => {
	it('should render', () => {
		render(<OverflowDatePicker />);
		const testOverflowDatePicker = screen.getByText('OverflowDatePicker Initiated!');
		expect(testOverflowDatePicker).toBeInTheDocument();
	});
});
