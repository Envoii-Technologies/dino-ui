import { render, screen } from '@testing-library/react';
import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
	it('should render', () => {
		render(<DatePicker />);
		const testDatePicker = screen.getByText('DatePicker Initiated!');
		expect(testDatePicker).toBeInTheDocument();
	});
});
