import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
	it('should render', () => {
		render(<Divider />);
		const testDivider = screen.getByText('Divider Initiated!');
		expect(testDivider).toBeInTheDocument();
	});
});
