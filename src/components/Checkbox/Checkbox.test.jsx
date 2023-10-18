import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
	it('should render', () => {
		render(<Checkbox />);
		const testCheckbox = screen.getByText('Checkbox Initiated!');
		expect(testCheckbox).toBeInTheDocument();
	});
});
