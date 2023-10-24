import { render, screen } from '@testing-library/react';
import { Dot } from './Dot';

describe('Dot', () => {
	it('should render', () => {
		render(<Dot />);
		const testDot = screen.getByText('Dot Initiated!');
		expect(testDot).toBeInTheDocument();
	});
});
